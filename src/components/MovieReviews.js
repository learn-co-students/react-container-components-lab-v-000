// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) => (
    <div className="review-list">
        { reviews.map(review => (
            <ul>
                <li className='review'>{review.display_title}</li>
            </ul>

        ))}
    </div>
)

export default MovieReviews;