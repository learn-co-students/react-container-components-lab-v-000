// Code MovieReviews Here
import React from 'react';
import Review from './Review';


const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    { reviews.map(review => <Review headline={review.headline} />) }
  </div>
)

export default MovieReviews;
