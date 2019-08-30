import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App.jsx';

import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";

const initState = {
    products: [],
    reviews: [],
    links: {
        loginUrl: 'http://smktesting.herokuapp.com/api/register/'
    },
    token: null
}

const reducer = (state = initState, {type, payload}) => {

    switch (type) {
        case "SOME":
            return {
                ...state,
                some: payload
            }
        case "OTHER":
            return {
                ...state,
                other: payload
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: payload
            }
        default:
            return state
    }
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
