import React from "react";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import firebase from "firebase";
import "firebase/firestore";
import { getFirestore } from "../Services/getFirestore";

export const Cart = () => {
    
    const { cartList, removeItem, clearCart, totalPrice } = useCartContext();

    const [orderId, setOrderId] = useState("");
    const [userForm, setUserForm] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
    });

    const createOrder = (e) => {
        e.preventDefault();

        let order = {};
        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer = userForm;
        order.total = totalPrice;
        order.items = cartList.map((itemAdded) => {
            const id = itemAdded.oneProduct.id;
            const title = itemAdded.oneProduct.title;
            const subtotal = itemAdded.oneProduct.price * itemAdded.quantity;
            return { id, title, subtotal };
        });
        const dataBase = getFirestore();
        dataBase
            .collection("orders")
            .add(order)
            .then((response) => setOrderId(response.id))
            .catch((error) => alert("Error:", error))
            .finally(() => clearCart())
        };
    const handleChange = (e) => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value,
        });
    };

    function onOrderAlert(orderId){
        alert("Your order is:" + orderId)
    }

    return (
        <div>
            <h1 class="myCustomH1Cart">Cart</h1>

            {cartList.map((itemAdded) => (
                <div key={itemAdded.oneProduct.id}>

                    <table border="2" class="myCustomTable">
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Unit  Price</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img
                                    src={itemAdded.oneProduct.photo}
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

                    <form onSubmit={createOrder} onChange={handleChange} class="hola">
                    
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={userForm.name}
                                required/>                        
                    
                            <label>Surename</label>
                            <input
                                type="text"
                                name="surname"
                                defaultValue={userForm.surname}
                                required/>                        
                    
                            <label>Phone</label>
                            <input
                                type="text"
                                name="phone"
                                defaultValue={userForm.phone}
                                required/>
                                            
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@gmail.com"
                                defaultValue={userForm.email}
                                required/>
                        
                        <button>Buy!</button>
                    </form>

                    {/* I was trying to use an alert function but it never came to show the orderId */}

                </div>
            ) : (
                <div class="myCustomCartEmpty">
                    
                    <p>Your order is: {orderId}</p>

                    <p>The cart is empty</p>
                    <Link to="/">Go to home</Link>
                </div>
            )}

        </div>
    );
};