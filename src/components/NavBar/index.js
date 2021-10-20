import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBarElements';
import CartWidget from './CartWidget';

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
                        {goToCart} <CartWidget/>
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar