import React, {Fragment,Component} from 'react';

import Col from "react-bootstrap/Col";

import ProductDetails from "../moleculas/ProductDetails";
import ReviewsModule from "./ReviewsModule";

const Product = ({ product,apiUrl,reviews }) => (
    <Fragment>
        <ProductDetails product={product} apiUrl={apiUrl} />
        <ReviewsModule reviews={reviews}/>
    </Fragment>
)

export default Product;