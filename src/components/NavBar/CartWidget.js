import React from "react";
import { FiShoppingCart } from 'react-icons/fi'
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {

    const { itemQuantity } = useCartContext();

    if (itemQuantity > 0) {
        return (
            <div className="ShoppingCart">
                <FiShoppingCart size="1.2em" title="Go to Cart" />
                <p className="Cart-Number">{itemQuantity}</p>
            </div>
        );
    }
    return <></>;
}

export default CartWidget