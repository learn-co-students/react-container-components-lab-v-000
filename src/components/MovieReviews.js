import React from 'react';
import PropTypes from 'prop-types';

const MovieReviews = ({reviews}) => {
    return (
      <div className="review-list">
      {reviews.map(review =>
        <div className="review">
        {review.display_title}
        </div>
      )}
      </div>
    );
}

MovieReviews.defaultProps = {
  reviews: "hello"
};

export default MovieReviews;
