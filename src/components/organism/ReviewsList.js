import React from 'react'

const ReviewsList = ({reviews}) => {
    return (
        <div className="reviews_list">
            <h2>Reviews</h2>
            {
                reviews.map(item => {
                    return <div key={item.id}>{item.text}</div>
                })
            }
        </div>
    )
}

export default ReviewsList;