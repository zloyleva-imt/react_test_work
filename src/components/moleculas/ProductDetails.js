import React from 'react'
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

const ProductDetails = ({product,apiUrl}) => {
    return (
        <Col xs={6}>
            <h1 className="text-capitalize border-bottom">{product.title}</h1>
            <div className="my-4">
                <Image src={`${apiUrl}static/${product.img}`} rounded />
            </div>
            <div className="border-top">
                <h3 className="h4">Product Description</h3>
                <p>{product.text}</p>
            </div>
        </Col>
    )
}

export default ProductDetails