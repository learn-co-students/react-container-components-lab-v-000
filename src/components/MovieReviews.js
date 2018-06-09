// Code MovieReviews Here
import React from 'react';
import PropTypes from 'prop-types';

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map(review => <p className="review">{review.display_title}</p>)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
