import React from 'react';
import PropTypes from 'prop-types';

const Reviews = ({display_title, headline}) => {
  return (
    <div className="review">
      <p>{display_title}</p>
      <p>{headline}</p>
    </div>
  )
}

const MovieReviews = ({reviews}) => (
  <div className="review-list">
    {reviews.map(Reviews)}
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
};

MovieReviews.propTypes = {
  reviews: PropTypes.shape({
    display_title: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired
  })
}

export default MovieReviews;
