import React from 'react'

const Review = ({display_title, summary_short}) => {
  return (
    <div className="review">
    <p>{display_title}</p>
    <p>{summary_short}</p>
    </div>
  )
}

const MovieReviews = ({reviews}) =>
  <div className="review-list">
  {reviews.map(Review)}
  </div>

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
