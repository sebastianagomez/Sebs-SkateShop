import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBarElements';
import CartWidget from './CartWidget';
import "./style.css"

const Navbar = ({skate, clothes, shoes, accessories, contact, goToCart }) => {
    return (
        <>
            <Nav className="myCustomNav">
                <NavLink className="myCustomNav-NavLink" to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars className="Bars"/>
                <NavMenu className="myCustomNav-NavMenu">
                    <NavLink className="myCustomNav-NavLink" to="/categoria/skate" activeStyle>
                        {skate}
                    </NavLink>
                    <NavLink className="myCustomNav-NavLink" to="/categoria/clothes" activeStyle>
                        {clothes}
                    </NavLink>
                    <NavLink className="myCustomNav-NavLink" to="/categoria/shoes" activeStyle>
                        {shoes}
                    </NavLink>
                    <NavLink className="myCustomNav-NavLink" to="/categoria/accessories" activeStyle>
                        {accessories}
                    </NavLink>
                    <NavLink className="myCustomNav-NavLink" to="/categoria/contact" activeStyle>
                        {contact}
                    </NavLink>
                </NavMenu>
                <NavBtn className="myCustomNav-NavBtn">
                    <NavBtnLink className="myCustomNav-NavBtnLink" to="/cart">
                        {goToCart} <CartWidget/>
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar