import React from "react";
import { useState, useEffect } from "react";
import { ItemCount } from "./ItemCount";
import { useParams } from 'react-router-dom';
import { ItemList } from "./ItemList";
import { getFetch } from "../Services/getFetch.js";

export function ItemListContainer({ greeting }) {

    // const { idCategoria } = useParams();

    // console.log(idCategoria)

    const [product, setProduct] = useState([]);

    useEffect(() => {
        getFetch
            .then((res) => {
                setProduct(res);
            })
            .catch((err) => console.log(err));
    }, []);


    function showCantityProducts(total) {
        console.log(`la cantidad total es ${total}`);
    };
        return (
            <div>   
                <p>{greeting}</p>   
                <ItemCount
                    stock={10}
                    initial={1}
                    onAdd={showCantityProducts}
                />
                <ItemList product={product} />
            </div>
        );
};

export default ItemListContainer