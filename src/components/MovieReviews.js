import React from 'react';

const renderReviews = ({
  display_title, summary_short, link
}) => {
  return (
    <div className="review">
      <h2><a href={link.url}>{display_title}</a></h2>
      <p>{summary_short}</p>
    </div>
  )
}

const MovieReviews = ({ reviews }) => {
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


