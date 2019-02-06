// Code MovieReviews Here
import React from 'react'

const MovieReview = ({title, headline}) => (
  <div className="review">
    <p>{title}</p>
    <p>{headline}</p>
  </div>
)

const MovieReviews = ({reviews}) => (
  <div className="review-list">
    { reviews.map(MovieReview)}
  </div>
)

export default MovieReviews
