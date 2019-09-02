import { SET_TOKEN } from '../actions/registration'

const initState = {
    products: [],
    reviews: [],
    links: {
        loginUrl: 'http://smktesting.herokuapp.com/api/register/'
    },
    token: null
}

export const reducer = (state = initState, {type, payload}) => {

    switch (type) {
        case SET_TOKEN:
            return {
                ...state,
                token: payload
            }
        default:
            return state
    }
};