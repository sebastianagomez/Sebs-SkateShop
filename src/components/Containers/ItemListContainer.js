import React from "react";
import { ItemCount } from "./ItemCount";

export function ItemListContainer({ greeting }) {
    function showCantityProducts(total) {
        console.log(`la cantidad total es ${total}`);
    };

    // const ItemListContainer = ({greeting}) => {
        return (
            <div>
                <p>{greeting}</p>   
                <ItemCount
                    stock={10}
                    initial={1}
                    onAdd={showCantityProducts}
                />
            </div>
        );
};

export default ItemListContainer