// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) => (
    <div className="review-list">
        <ul>
            {reviews.map(review => <li className="review">{review.headline}</li>)};
        </ul>
    </div>
)

export default MovieReviews;