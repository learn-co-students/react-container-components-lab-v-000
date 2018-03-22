import React from 'react';

const Review = ({ title, summary_short }) => {
  return (
    <div className="review">

      <h3>{title}</h3>
      <p>{summary_short}</p>
      <br/>
    </div>
  )
}

const MovieReviews = ({ reviews }) =>
  <div className="review-list">
    {reviews.map(Review)}
  </div>


MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
