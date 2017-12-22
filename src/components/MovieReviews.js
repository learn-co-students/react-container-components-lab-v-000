import React from 'react';
import PropTypes from 'prop-types';

const MovieReviews = ({ reviews }) => (
  <ul className="review-list">
    {reviews.map(review => (
      <li className="review" key={review.display_title}>
        {review.mpaa_rating || 'NR'} - {review.byline}
      </li>
    ))}
  </ul>
);

MovieReviews.defaultProps = {
  reviews: []
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      byline: PropTypes.string,
      mpaa_rating: PropTypes.string
    })
  )
};

export default MovieReviews;
