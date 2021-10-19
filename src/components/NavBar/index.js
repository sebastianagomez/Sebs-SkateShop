import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBarElements'
import { FiShoppingCart } from 'react-icons/fi'

const Navbar = ({skate, clothes, shoes, accessories, contact, goToCart }) => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/skate" activeStyle>
                        {skate}
                    </NavLink>
                    <NavLink to="/clothes" activeStyle>
                        {clothes}
                    </NavLink>
                    <NavLink to="/shoes" activeStyle>
                        {shoes}
                    </NavLink>
                    <NavLink to="/accessories" activeStyle>
                        {accessories}
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        {contact}
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/cart">
                        {goToCart}   <FiShoppingCart size="1.2em" title="Go to Cart" style={{margin: "-5px", marginLeft: "1px"}}/>
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
