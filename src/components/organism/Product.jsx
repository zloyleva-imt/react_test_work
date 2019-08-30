import React, {Fragment,Component} from 'react';
import PropTypes from 'prop-types'

import ProductDetails from "../moleculas/ProductDetails";
import ReviewsModule from "./ReviewsModule";

const Product = ({ product,apiUrl,reviews,token }) => (
    <Fragment>
        <ProductDetails product={product} apiUrl={apiUrl} />
        <ReviewsModule reviews={reviews} token={token} productId={product.id} apiUrl={apiUrl}/>
    </Fragment>
)

const {
    string,
    array
} = PropTypes

Product.propTypes ={
    product: string.isRequired,
    apiUrl: string.isRequired,
    reviews: array.isRequired,
    token: string.isRequired
}

export default Product;