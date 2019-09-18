import React, {Fragment} from 'react';
import { Redirect } from 'react-router'
import PropTypes from 'prop-types'
import _ from 'lodash'

import ProductDetails from "../moleculas/ProductDetails";
import ReviewsModule from "./ReviewsModule";
import {connect} from "react-redux";
import routes from "../../initData/routes";
import {withRouter} from "react-router-dom";

const Product = ({ products,match }) => (
    <Fragment>
        {
            products && products.length?(
                <Fragment>
                    <ProductDetails product={searchProduct(products, match.params.id)} apiUrl={routes.apiUrl} />
                    {/*<ReviewsModule reviews={[]} apiUrl={routes.apiUrl}/>*/}
                </Fragment>
            )
                :
                <Redirect to='/' />
        }
    </Fragment>
)

const searchProduct = (products, id) => _.find(products, el => el.id == id)

const {
    string,
    array
} = PropTypes

Product.propTypes ={
    products: Array.isRequired,
    apiUrl: string.isRequired,
    reviews: array.isRequired,
    token: string.isRequired
}

export default withRouter(connect(
    state => ({
        products: state.products.products
    })
)(Product));
