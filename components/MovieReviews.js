import React from 'react';
// import PropTypes from 'prop-types';

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(({ headline, summary_short }, index) => {
      return (
      <div key={index} className="review">
        <h1>{headline}</h1>
        <p>{summary_short}</p>
      </div>
      );
    })}
  </div>
);

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
