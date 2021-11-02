import React from "react";
import { useState, useEffect } from "react";
import { ItemCount } from "./ItemCount";
import { useParams } from 'react-router-dom';
import { ItemList } from "./ItemList";
import { getFetch } from "../Services/getFetch.js";

export function ItemListContainer({ greeting }) {

    const { id } = useParams();

    console.log(id)

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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