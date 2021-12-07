import React from "react";
import { useState } from "react";
import { ItemCount } from "./ItemCount";
import { Link } from "react-router-dom"
import { useCartContext} from "../../context/CartContext"

export const ItemDetail = ({ oneProduct }) => {    

    const [quantity, setQuantity] = useState(1);

    const [purchaseQuantity, setPurchasequantity] = useState(false);

    const {addToCartList} = useCartContext()

    const addToCart = (quantityAdded) => {
        setQuantity(quantityAdded);    
        addToCartList({ oneProduct, quantity: quantityAdded });
        setPurchasequantity(true);
    };

    return (
        <div className="myCustomCartDetail">
            <h2>{oneProduct.title}</h2>
            <img src={oneProduct.photo} alt={oneProduct.title} />
            <p>{oneProduct.detail}</p>
            <h3>$ {oneProduct.price}</h3>
            {purchaseQuantity ? (
                <div>
                    <Link to="/">
                        <button>Back</button>
                    </Link>
                    <Link to="/cart">
                        {" "}<button>Buy product</button>{" "}
                    </Link>                    
                </div>
            ) : (
                <ItemCount
                    stock={oneProduct.stock}
                    initial={quantity}
                    onAdd={addToCart}
                />
            )}
            <p>{quantity} Unit(s)</p>
        </div>
    );
};