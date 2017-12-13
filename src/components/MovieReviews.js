// Code MovieReviews Here
import React from 'react';
const Review = ({ headline, byLine, summary_short}) => {
  return (
    <div className="review"
    key={headline}>

    </div>
  )
}

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
  {reviews.map(Review)}
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
}


export default MovieReviews;
