// Code MovieReviews Here
import React from 'react';

const Review = ({ display_title, mpaa_rating }) => {
  return (
    <div className="review">
      <h3>{display_title} -- {mpaa_rating}</h3>
    </div>
  )
}

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(Review)} />)}
  </div>
);

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
