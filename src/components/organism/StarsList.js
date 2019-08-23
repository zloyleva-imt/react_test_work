import React from 'react';
import Star from "../moleculas/Star";

const StarsList = ({item}) => (
    <div>
        {
            [...Array(5)].map((el,i) => <Star index={i} item={item} key={i}/>)
        }
    </div>
)

export default StarsList;