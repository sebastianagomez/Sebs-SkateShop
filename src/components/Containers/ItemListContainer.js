import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { ItemList } from "./ItemList";
// import { getFetch } from "../Services/getFetch.js";
import { getFirestore } from "../Services/getFirestore";

export function ItemListContainer() {

    const { id } = useParams();

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        // GET FIRESTORE: 

        const db = getFirestore();

        if (id){
            const dbCategory = db
                .collection("items")
                .where("category", "==", id)
                .get();
            dbCategory
                .then((response) =>
                    setProduct(
                        response.docs.map((item) => ({
                            id: item.id,
                            ...item.data(),
                        }))
                    )
                )
                .catch((error) => alert("Error:", error))
                .finally(() => setLoading(false));
        }else {
            const dbCategory = db
                .collection("items")
                .orderBy("category")
                .get();

            dbCategory
                .then((response) =>
                    setProduct(
                        response.docs.map((item) => ({
                            id: item.id,
                            ...item.data(),
                        }))
                    )
                )
                .catch((error) => alert("Error:", error))
                .finally(() => setLoading(false));
        }        
        }, [id]);

        return (
            <div>
                <ItemList product={product} />
            </div>
        );
};

export default ItemListContainer