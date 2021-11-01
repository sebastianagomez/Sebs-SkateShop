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

        return (
            <div>
                <ItemList product={product} />
            </div>
        );
};

export default ItemListContainer