import { SET_TOKEN } from '../actions/registration'

const initState = {
    token: null
}

export const auth = (state = initState, {type, payload}) => {

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