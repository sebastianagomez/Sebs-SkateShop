import React from "react";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ oneProduct }) => {

    function showCantityProducts(total) {
        console.log(`la cantidad total es ${total}`);
    };

    return (
        <div className="myCustomCartDetail">
            <h2>{oneProduct.title}</h2>
            <img src={oneProduct.photo} alt={oneProduct.title} />
            <p>{oneProduct.detail}</p>
            <h3>$ {oneProduct.price}</h3>
            <ItemCount stock={oneProduct.stock} initial={1} onAdd={showCantityProducts} />            
        </div>
    );
};