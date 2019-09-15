// Code MovieReviews Here

import React from 'react';

const Review = ({ title }) => (
    <div className="review">
      <h3>{ title }</h3>
    </div>
  )
   
   
  const MovieReviews = ({ reviews }) => (
    <div className="review-list">
      { reviews.map(review => <Review title={review.display_title} />) }
    </div>
  )

export default MovieReviews;