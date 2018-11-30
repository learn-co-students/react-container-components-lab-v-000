import React from 'react';
import PropTypes from 'prop-types';

// Your MovieReviews component should be stateless and functional.
// You are free to lay out each review as you like using the data that the API returns, but make sure that the component outputs a top - level element with the class review-list and that each review is wrapped by an element with class review.
const MovieReviews = ({ reviews }) => {
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