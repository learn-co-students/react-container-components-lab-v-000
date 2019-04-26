import React from 'react';

const Review = ({
  headline,
  byline,
  summary_short
}) => {
  return (
    <div
      key={headline}
      className="review"
    >
      <p>{headline}</p>
      <p className="author">{byline}</p>
      <blockquote>{summary_short}</blockquote>
    </div>

  )
}

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(Review)}
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
