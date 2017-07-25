import React from 'react';

const Reviews = ({ headline, summary_short, byline }) => {
  return <div className="review">
    <h3>{headline}</h3>
    <p>{byline}</p>
    <p>{summary_short}</p>
  </div>
};

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
  {reviews.map(Reviews)}
  </div>
);

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;


