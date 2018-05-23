import React from 'react';

const renderReviews = ({
  title, summary
}) => {
  return (
    <div className="review">
      <h1>{title}</h1>
      <p>{summary}</p>
    </div>
  )
}

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map(renderReviews)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
