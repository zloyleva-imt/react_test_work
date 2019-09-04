import React, {Fragment,Component} from 'react';
import PropTypes from 'prop-types'

import ProductDetails from "../moleculas/ProductDetails";
import ReviewsModule from "./ReviewsModule";
import {connect} from "react-redux";
import routes from "../../initData/routes";

const Product = ({ product,token }) => (
    <Fragment>
        {
            product && (
                <Fragment>
                    <ProductDetails product={product} apiUrl={routes.apiUrl} />
                    <ReviewsModule reviews={[]} apiUrl={routes.apiUrl}/>
                </Fragment>
            )
        }
    </Fragment>
)

const {
    string,
    array
} = PropTypes

Product.propTypes ={
    product: Object.isRequired,
    apiUrl: string.isRequired,
    reviews: array.isRequired,
    token: string.isRequired
}

export default connect(
    state => ({
        product: state.products.selectedProduct
    })
)(Product);