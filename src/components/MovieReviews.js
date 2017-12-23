// Code MovieReviews Here
import React from 'react';
import PropTypes from 'prop-types';

const MovieReviews = ({reviews}) => {

  return (
    <div className="review-list">
      {reviews.map(review => <li className="review"></li>)}
    </div>
  )

}

MovieReviews.defaultProps = {
  reviews: PropTypes.array
}

export default MovieReviews;
