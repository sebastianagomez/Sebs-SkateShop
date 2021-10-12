import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/skate" activeStyle>
                        Skate
                    </NavLink>
                    <NavLink to="/indumentaria" activeStyle>
                        Indumentaria
                    </NavLink>
                    <NavLink to="/zapatillas" activeStyle>
                        Zapatillas
                    </NavLink>
                    <NavLink to="/accesorios" activeStyle>
                        Accesorios
                    </NavLink>
                    <NavLink to="/contacto" activeStyle>
                        Contacto
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signup" className="CACA">
                        Inscribirse
                    </NavBtnLink>
                    <NavBtnLink to="/signin">
                        Iniciar Sesión
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
