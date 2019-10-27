// Code MovieReviews Here
import React from 'react';
import Review from './Review';


const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    { reviews.map(Review) }
  </div>
)

export default MovieReviews;
