import React, { Fragment } from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


import Header from "./Header";
import Product from './Product';

const Page = () => (
    <Fragment>
        <Header />
        <Container>
            <Row className="my-3">
                <Product />
            </Row>
        </Container>


    </Fragment>
)

export default Page;


// constructor(props) {
//     super(props);
//     this.state = {
//         reviews: [],
//         apiUrl: 'http://smktesting.herokuapp.com/',
//         selectedProduct: null,
//     }
// }
// menuClickHandler(id) {
//     const { products } = this.props;
//     const selectedProduct = _.findLast(products, el => el.id == id)
//
//     this.setState({
//         ...this.state,
//         selectedProduct: selectedProduct
//     });
//
//     axios
//         .get(this.state.apiUrl + 'api/reviews/' + id, {})
//         .then(res => {
//             console.log('res', res.data)
//             this.setState({
//                 ...this.state,
//                 reviews: res.data
//             });
//         })
// }