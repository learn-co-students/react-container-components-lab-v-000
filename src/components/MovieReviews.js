// Code MovieReviews Here
import React from 'react';
const Review = ({ title, summary }) => (
  <div className="Review">
    <h3>{ title }</h3>
    <p>{ summary }</p>
  </div>
)

const ReviewList = ( {reviews} ) => (

  <div className="review-list">
    { reviews.map(review => <Review title={review.display_title} summary={review.sumary_short} />) }
  </div>
)

export default ReviewList
