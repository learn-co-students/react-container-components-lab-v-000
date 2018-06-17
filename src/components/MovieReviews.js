import React from 'react';

const Review = ({display_title, headline, byline, summary_short}) => {
  return (
    <div className="review" key={display_title}>
      <h3>{display_title}</h3>
      <h4>{headline} - {byline}</h4>
      <p>{summary_short}</p>
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
};

export default MovieReviews
