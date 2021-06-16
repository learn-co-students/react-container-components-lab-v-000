import React from 'react';
 
const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    { reviews.map(review => <p className="review"> Review {review.display_title} </p>) }
  </div>
)
 
export default MovieReviews;