import { createContext, useState, useContext } from "react";

export const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([])

    const addToCartList = (itemAdded) => {
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
        setCartList(
            cartList.filter(
                (itemSearched) => itemSearched.oneProduct.id !== idItemToRemove
            )
        );
    };

    const clearCart = () => {
        setCartList([]);
    };

    return (
        <CartContext.Provider value = {{
            cartList,
            addToCartList,
            removeItem,
            clearCart,

        }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider