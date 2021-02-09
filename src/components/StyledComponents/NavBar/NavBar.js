import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import './NavBar.css';


class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar color="faded" dark expand="md" className="navBar" >
                    <NavbarBrand href="/">SuperStore</NavbarBrand>
                    <Nav navbar className="nav">
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/deals">Deals</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/catergories">Catergories</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;