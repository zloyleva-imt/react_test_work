import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {connect} from "react-redux";
import {fetchProducts, selectProduct} from "../../actions/products";

const Header = ({ products,fetchProducts,selectProduct, selectedProduct }) => {

    useEffect(() => {
        fetchProducts()
    },{})

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">E-Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {
                        products.map(el => {
                            return (
                                <Link to={"/products/"+el.id} className='nav-link' key={el.id} activeclassname='active'>{el.title}</Link>
                            )
                        })
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default connect(
    state => ({
        products: state.products.products,
        selectedProduct: state.products.selectedProduct,
    }),
    dispatch => ({
        fetchProducts: () => dispatch(fetchProducts()),
        selectProduct: product => dispatch(selectProduct(product))
    })
)(Header);
