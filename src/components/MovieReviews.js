// Code MovieReviews Here
import React from 'react';
// 
const MovieReviews = ({reviews}) => (
    <div className="review-list">
        <ul>
            {reviews.map(x => <li key={x.display_title} className="review">{x.display_title}</li>)}
        </ul>
    </div>
);
// const MovieReviews = ({reviews, text}) => 

export default MovieReviews




