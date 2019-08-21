import React, {Fragment} from 'react';
import Image from "react-bootstrap/Image";

const Product = ({product,apiUrl}) => {
    return (
        <Fragment>
            <h1 className="text-capitalize border-bottom">{product.title}</h1>
            <div className="my-4">
                <Image src={`${apiUrl}static/${product.img}`} rounded />
            </div>
            <div className="border-top">
                <h3 className="h4">Product Description</h3>
                <p>{product.text}</p>
            </div>
        </Fragment>
    )
}

export default Product;