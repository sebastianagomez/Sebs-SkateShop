import { createContext, useState, useContext } from "react";

export const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([])
    const [itemQuantity, setItemQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCartList = (itemAdded) => {
        setItemQuantity(itemQuantity + itemAdded.quantity);
        setTotalPrice(totalPrice + itemAdded.oneProduct.price * itemAdded.quantity);

        const findItem = cartList.find(
            (itemInCart) => itemInCart.oneProduct.id === itemAdded.oneProduct.id
        );
        if (findItem) {
            findItem.quantity = findItem.quantity + itemAdded.quantity;
            setCartList(cartList);
        } else {
            setCartList((previousItems) => [...previousItems, itemAdded]);
        }
    };

    const removeItem = (idItemToRemove) => {
        const itemToRemove = cartList.find(
            (itemInCart) => itemInCart.oneProduct.id === idItemToRemove
        );
        setItemQuantity(itemQuantity - itemToRemove.quantity);
        setTotalPrice(
            totalPrice - itemToRemove.oneProduct.price * itemToRemove.quantity
        );

        setCartList(
            cartList.filter(
                (itemSearched) => itemSearched.oneProduct.id !== idItemToRemove
            )
        );
    };

    const clearCart = () => {
        setCartList([]);
        setItemQuantity(0);
        setTotalPrice(0);        
    };

    return (
        <CartContext.Provider value = {{
            cartList,
            addToCartList,
            removeItem,
            clearCart,
            itemQuantity,
            totalPrice,

        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider