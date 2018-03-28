// Code MovieReviews Here
import React from 'react';


const MovieReviews = ({ reviews }) => {
    return (
        <div className="review-list">
            {reviews.map(review => 
                <div className="review">
                    <h1>{review.display_title}</h1>
                </div>
            )}
        </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews;