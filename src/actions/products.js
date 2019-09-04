import axios from "axios";
import routes from '../initData/routes'
import { fetchRequest } from '../helpers/fetchRequest'

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';

export const fetchProducts = () => dispatch => {
    axios
        .get(routes.productsUrl, {})


    // fetchRequest({
    //     method: 'GET',
    //     url: routes.productsUrl
    // })
        .then(res => {
            dispatch(setProducts(res.data))
        })
}

export const setProducts = products => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
})

export const selectProduct = product => ({
    type: SELECT_PRODUCT,
    payload: product
})