// Code MovieReviews Here
import React from 'react'

const Review = function({title}) {
  return (
    <div className="review">
      <h3> {title} </h3>
    </div>
  )
}

const MovieReviews = function ({reviews}) {
  return (
    <div className="review-list">
     {reviews.map(Review)}
    </div>
  )
}


MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
