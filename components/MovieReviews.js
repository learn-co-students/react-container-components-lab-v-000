import React from 'react';
// import PropTypes from 'prop-types';

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    <ul>
      {reviews.map(({ headline, summary_short }, index) => {
        return (
          <li key={index} className="review">
            <strong>{headline}</strong> - {summary_short}
          </li>
        );
      })}
    </ul>
  </div>
);

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
