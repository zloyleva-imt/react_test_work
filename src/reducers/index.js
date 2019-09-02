import { auth } from "./auth";
import { products } from "./products";
import { combineReducers } from "redux";


export default combineReducers({
    auth,
    products,
})