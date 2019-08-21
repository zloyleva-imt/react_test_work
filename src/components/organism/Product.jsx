import React, {Fragment,Component} from 'react';

import Col from "react-bootstrap/Col";

import ProductDetails from "../moleculas/ProductDetails";
import ReviewsList from "./ReviewsList";

const Product = ({ product,apiUrl,reviews }) => (
    <Fragment>
        <ProductDetails product={product} apiUrl={apiUrl} />
        <Col xs={6}>
            <div className="form_review"></div>
            <ReviewsList reviews={reviews}/>
        </Col>
    </Fragment>
)

export default Product;