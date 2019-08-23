import React from 'react';
import Star from "../moleculas/Star";

const StarsList = ({item}) => (
    <div>
        {
            [...Array(5)].map((el,i) => <Star index={i} item={item} />)
        }
    </div>
)

export default StarsList;