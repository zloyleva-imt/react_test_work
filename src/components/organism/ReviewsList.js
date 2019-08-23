import React from 'react';

import moment from "moment";

import StarsList from "./StarsList";

const ReviewsList = ({reviews}) => (
    <div className="reviews_list">
        {
            reviews.map(item => {
                return (
                    <div className='card p-2 my-2' key={item.id}>
                        <div>Author: <span className="font-weight-bold font-italic">{item.created_by.username}</span> at {moment(item.created_at).format("DD MMMM, YYYY")}</div>
                        <StarsList item={item} />
                        <div className="mt-2">{item.text}</div>
                    </div>
                )
            })
        }
    </div>
)

export default ReviewsList