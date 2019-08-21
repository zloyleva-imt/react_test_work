import React, {Component, Fragment} from 'react';

import _ from 'lodash';
import axios from 'axios';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "./Header";
import Product from './Product';

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
                <Header products={products} selectedProduct={selectedProduct} menuClickHandler={(id) => this.menuClickHandler(id)}/>
                <Container>
                    <Row className="my-3">
                        <Col xs={6}>
                            {
                                selectedProduct ? <Product product={selectedProduct} apiUrl={apiUrl}/> : ''
                            }
                        </Col>
                        <Col xs={6}>1 of 2</Col>
                    </Row>
                </Container>


            </Fragment>
        )
    }
}

export default Page;