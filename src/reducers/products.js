import {FETCH_PRODUCTS_SUCCESS, SELECT_PRODUCT} from "../actions/products";

const initState = {
    products: [],
    selectedProduct: null,
}

export const products = (state = initState, {type, payload}) => {

    switch (type) {
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: payload
            }
        case SELECT_PRODUCT:
            return {
                ...state,
                selectedProduct: payload
            }
        default:
            return state
    }
};