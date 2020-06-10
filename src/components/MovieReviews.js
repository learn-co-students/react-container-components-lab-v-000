// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) => (
    <div className="review-list">
        { reviews.map((review, index) => 
            <div key={Math.floor(Math.random() * 100000)} className="review">
                <h4>{review.headline}</h4>
                <p>By: {review.byline}</p>
                <p>{review.summary_short}</p>
                <a href={review.link.url}>Full Review</a>
                <br /><br />
            </div>
        )}
    </div>
)

export default MovieReviews;