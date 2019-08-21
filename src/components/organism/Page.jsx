import React, { Component, Fragment } from 'react';

import _ from 'lodash';
import axios from 'axios';

import Product from './Product';

class Page extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
            user:{
                name: 'Oleh'
            },
            apiUrl: 'http://smktesting.herokuapp.com/',
            selectedProduct: null,
            token: null
        }
    }

    componentDidMount(){
        axios
            .get(this.state.apiUrl + 'api/products/',{
                
            })
            .then(res => {
                console.log('res',res.data)
                this.setState({
                    ...this.state,
                    products: res.data
                });
            })
    }

    menuClickHandler(id){
        console.log('click',id)

        const selectedProduct = _.findLast(this.state.products, el=>el.id == id)
        console.log(selectedProduct)

        this.setState({
            ...this.state,
            selectedProduct: selectedProduct
        });
    }

    render() {

        const {products,selectedProduct,apiUrl} = this.state;

        return (
            <Fragment>
                <nav>
                    <ul>
                        {
                            products.map(el => {
                                return (
                                    <li
                                        key={el.id}
                                        onClick={() => {this.menuClickHandler(el.id)}}
                                    >
                                        {el.title}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                {
                    selectedProduct?<Product product={selectedProduct} apiUrl={apiUrl}/>:''
                }
                
            </Fragment>
        )
    }
}

export default Page;