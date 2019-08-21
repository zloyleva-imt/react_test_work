import React, {Component, Fragment} from 'react';

import _ from 'lodash';
import axios from 'axios';

import Product from './Product';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            user: {
                name: 'Oleh'
            },
            apiUrl: 'http://smktesting.herokuapp.com/',
            selectedProduct: null,
            token: null
        }
    }

    componentDidMount() {
        axios
            .get(this.state.apiUrl + 'api/products/', {})
            .then(res => {
                console.log('res', res.data)
                this.setState({
                    ...this.state,
                    products: res.data
                });
            })
    }

    menuClickHandler(id) {
        console.log('click', id)

        const selectedProduct = _.findLast(this.state.products, el => el.id == id)
        console.log(selectedProduct)

        this.setState({
            ...this.state,
            selectedProduct: selectedProduct
        });
    }

    render() {

        const {products, selectedProduct, apiUrl} = this.state;

        return (
            <Fragment>
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
                                            onClick={() => {
                                                this.menuClickHandler(el.id)
                                            }}
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
                {
                    selectedProduct ? <Product product={selectedProduct} apiUrl={apiUrl}/> : ''
                }

            </Fragment>
        )
    }
}

export default Page;