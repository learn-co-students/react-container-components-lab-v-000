import React from 'react'

const Review = ({ display_title }) => (
  <div className="review">
    return <h5>{display_title}</h5>
  </div>
)

const MovieReviews = ({ reviews }) => (
  <div className="review-list">{reviews.map(Review)}</div>
)

MovieReviews.defaultProps = {
  reviews: [],
}

export default MovieReviews
