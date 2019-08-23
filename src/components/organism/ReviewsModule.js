import React from 'react'
import Col from "react-bootstrap/Col";
import moment from "moment";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faRegStar } from '@fortawesome/free-regular-svg-icons'

const ReviewsModule = ({reviews}) => {
    return (
        <Col xs={6}>
            <h2>Reviews</h2>
            <div className="reviews_list">
                {
                    reviews.map(item => {
                        return (
                            <div className='card p-2 my-2' key={item.id}>
                                <div>Author: <span className="font-weight-bold font-italic">{item.created_by.username}</span> at {moment(item.created_at).format("DD MMMM, YYYY")}</div>
                                <div>
                                    {

                                    }
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div>{item.text}</div>
                            </div>
                        )
                    })
                }
            </div>
        </Col>
    )
}

export default ReviewsModule;