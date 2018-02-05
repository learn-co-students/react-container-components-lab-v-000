import React from 'react';

const Review = ({headline, display_title, summary_short}) => {
  return(
    <div key={headline} className="review">
      <h3>{display_title}</h3>
      <p>{summary_short}</p>
    </div>
  )
}

const MovieReviews = ({reviews}) => (
  <div className="review-list">
    {reviews.map(Review)}
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
