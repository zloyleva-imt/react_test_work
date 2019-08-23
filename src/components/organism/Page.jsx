import React, {Component, Fragment} from 'react';

import _ from 'lodash';
import axios from 'axios';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


import Header from "./Header";
import Product from './Product';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            reviews: [],
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
        const selectedProduct = _.findLast(this.state.products, el => el.id == id)

        this.setState({
            ...this.state,
            selectedProduct: selectedProduct
        });

        axios
            .get(this.state.apiUrl + 'api/reviews/' + id, {})
            .then(res => {
                console.log('res', res.data)
                this.setState({
                    ...this.state,
                    reviews: res.data
                });
            })
    }

    render() {

        const {products, selectedProduct, apiUrl, reviews} = this.state;

        return (
            <Fragment>
                <Header products={products} selectedProduct={selectedProduct} menuClickHandler={(id) => this.menuClickHandler(id)}/>
                <Container>
                    <Row className="my-3">
                        {
                            selectedProduct ? <Product product={selectedProduct} apiUrl={apiUrl} reviews={reviews}/> : 'No product selected'
                        }
                    </Row>
                </Container>


            </Fragment>
        )
    }
}

export default Page;