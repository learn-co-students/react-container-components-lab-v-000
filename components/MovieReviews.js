import React from 'react';

const renderReview = ({display_title, summary_short, link}) => {
  return (
    <div className="review">
      <h3>{display_title}</h3>
      <p>{summary_short}</p>
      <a href={link.url}>Read full review...</a>
    </div>
  )
}

const MovieReviews = ({reviews}) => {
  return (
  <div className="review-list">
    {reviews.map(renderReview)}
  </div>
)}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
