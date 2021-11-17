import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { ItemList } from "./ItemList";
import { getFetch } from "../Services/getFetch.js";
import { getFirestore } from "../Services/getFirestore";

export function ItemListContainer({ greeting }) {

    const { id } = useParams();

    console.log(id)

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {


        // GET FIRESTORE: 

        const db = getFirestore()
        // const dbQuery = db.collection("items").get()

        // dbQuery
        // .then(resp => setProduct( resp.docs.map( prod => ( { id: prod.id, ...prod.data() } )) ))



        if (id){
            getFetch
            .then((res) => {
                setProduct(res.filter(prod => prod.category == id ));
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
        }else {
            getFetch
            .then((res) => {
                setProduct(res);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
        }        
        }, [id]);

        return (
            <div>
                <ItemList product={product} />
            </div>
        );
};

export default ItemListContainer