import React from 'react';

const Review = ({ headline, byline }) => {
  return (
    <div className="review">
      <h3>{headline}</h3>
      <p>{byline}</p>
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
};

export default MovieReviews;
