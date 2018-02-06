import React from 'react'

const Review = ({ display_title, byline, summary_short, link }) => {
  return (
    <div key="display_title" className="review">
      <h1>{display_title}</h1>
      <h3>{byline}</h3>
      <p>{summary_short}</p>
    </div>
  )
}

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(Review)}
  </div>
);

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;