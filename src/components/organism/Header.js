import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = ({products, selectedProduct,menuClickHandler}) => {
    // console.log(menuClickHandler)
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">E-Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {
                        products.map(el => {
                            return (
                                <Nav.Link
                                    href="#"
                                    onClick={() => menuClickHandler(el.id)}
                                    key={el.id}
                                    active={(selectedProduct && el.id == selectedProduct.id)}
                                >
                                    {el.title}
                                </Nav.Link>
                            )
                        })
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
export {Header}