// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviewList }) =>(
  <div className="review-list">
  { reviewList.map(review=> <div className="review" > {review}</div>) }
  </div>
)
