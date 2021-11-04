import { createContext, useState, useContext } from "react";

export const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([])

    function addToCart (items){
        setCartList([
            ...cartList,
            items
        ])
    }

    const mostrarListado = () =>{
        console.log(cartList)
    }

    return (
        <CartContext.Provider value = {[
            cartList,
            mostrarListado
        ]}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider