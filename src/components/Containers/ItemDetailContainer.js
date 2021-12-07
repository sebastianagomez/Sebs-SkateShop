import React from "react";
import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
// import { getFetch, getFetchOneProduct } from "../Services/getFetch";
import { useParams } from "react-router";
import { getFirestore } from "../Services/getFirestore";

export const ItemDetailContainer = () => {
    const [oneProduct, setOneProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const {id} = useParams()

    useEffect(() => {

        // GET FIRESTORE

        const db = getFirestore();

        db
            .collection("items")
            .doc(id)
            .get()
            .then((item) => setOneProduct({ id: item.id, ...item.data() }))
            .catch((error) => alert("Error:", error))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <>
            <ItemDetail oneProduct={oneProduct}/>
        </>
    );

};