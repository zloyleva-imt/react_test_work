import React from 'react'
import Col from "react-bootstrap/Col";

import ReviewsList from "./ReviewsList";

const ReviewsModule = ({reviews}) => {
    return (
        <Col xs={6}>
            <h2>Reviews</h2>
            <ReviewsList reviews={reviews}/>
        </Col>
    )
}

export default ReviewsModule;