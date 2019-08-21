import React from 'react';

const Product = ({product,apiUrl}) => {
    return (
        <div>
            <h1>{product.title}</h1>
            <div>
                <img src={`${apiUrl}static/${product.img}`} alt=""/>
            </div>
            <div>
                <h3>Product Description</h3>
                <p>{product.text}</p>
            </div>
        </div>
    )
}

export default Product;