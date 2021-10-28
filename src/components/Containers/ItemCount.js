import React, { useState } from "react";
import "./style.css"

export function ItemCount({ stock, initial, onAdd }) {
    let [count, setCount] = useState(initial);

    function addProduct() {
        setCount(count + 1);
    }

    function restProduct() {
        setCount(count - 1);
    }

    return (
        <div className="itemCount">
            <h4>Stock: {stock} </h4>
            <h3>Selected Products: {count} </h3>
            <div className="myCustomBlockCount">
                <button onClick={restProduct} disabled={count < 1}>
                    -
                </button>
                <button onClick={addProduct} disabled={count === stock}>
                    +
                </button>                
                <button onClick={() => onAdd(count)}>Add to cart</button>
            </div>
        </div>
    );
}