import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
    
    const { cartList, removeItem, clearCart, totalPrice } = useCartContext();

    return (
        <div>
            <h1>Cart</h1>

            {cartList.map((itemAdded) => (
                <div key={itemAdded.oneProduct.id}>

                    <table border="2" class="myCustomTable">
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img
                                    src={itemAdded.oneProduct.img}
                                    alt={itemAdded.oneProduct.title}/>
                                </td>
                                <td>{itemAdded.oneProduct.title}</td>
                                <td>{itemAdded.quantity}</td>
                                <td>$ {itemAdded.oneProduct.price}</td>
                                <td>$ {totalPrice}</td>
                                <td><button onClick={() => removeItem(itemAdded.oneProduct.id)}>
                                        Delete product
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                
            ))}

            {cartList.length ? (
                <div>
                    <button onClick={() => clearCart()}>Clear Cart</button>
                    <button>Pay</button>
                </div>
            ) : (
                <div>
                    <p>The cart is empty</p>
                    <Link to="/">Go to home</Link>
                </div>
            )}

        </div>
    );
};