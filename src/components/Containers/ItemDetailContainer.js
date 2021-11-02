import React from "react";
import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { getFetch, getFetchOneProduct } from "../Services/getFetch";
import { useParams } from "react-router";

export const ItemDetailContainer = () => {
    const [oneProduct, setOneProduct] = useState({});

    const {id} = useParams()
    console.log(id + "soy id")

    useEffect(() => {
        getFetch
            .then((res) => {
                const detail = res.filter((prod) => prod.id == id)
                setOneProduct(detail[0])
            })
            .catch((err) => console.log(err))
    }, []);

    return (
        <>
            <ItemDetail oneProduct={oneProduct}/>
        </>
    );

};