// Code MovieReviews Here
import React from 'react';

const Review = ({headline, summary_short}) => {
  return(
    <div className="review">
      <h4>{headline}</h4>
      <p>{summary_short}</p>
    </div>
  )
}

const MovieReviews = ({reviews}) => {
  return (
  <div className="review-list">
    {reviews.map(Review)} //each review goes through the const Review, which gets returned the headline of the review and summary_short
  </div>
)}

MovieReviews.defaultProps = {
  reviews:[]
}

export default MovieReviews
