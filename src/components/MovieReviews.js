// Code MovieReviews Here
import React from 'react';
const Review = ({ title, content }) => {
  return(
  <div className="review">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
  )
}
const MovieReviews = ({ reviews }) => (
  <div className="review-list">
  { reviews.map(Review)}
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
