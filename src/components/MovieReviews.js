import React from 'react';

const renderReview = ({ display_title, headline, summary_short }, index) => {
  return (
    <div className="review" key={index}>
      <h3>{display_title}</h3>
      <strong>{headline}</strong>
      <p>{summary_short}</p>
    </div>
  )
}

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map(renderReview)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
