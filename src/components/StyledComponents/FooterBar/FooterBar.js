import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap'; 
import './FooterBar.css';



class FooterBar extends Component {

    render() {
        return (
            <div>
                <Navbar fixed="bottom" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">SuperStore</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                </Navbar>
               
            </div>
        )
    }
}

export default FooterBar;