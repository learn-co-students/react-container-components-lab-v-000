import React from 'react';
import PropTypes from 'prop-types';

function movieElement(movie, index) {
  return(
    <div key={index} className='review'>
      {movie.display_title}
    </div>
  );
}

const MovieReviews = ({ reviews }) =>
  <div className='review-list'>
    {reviews.map(movieElement)}
  </div>

MovieReviews.defaultProps = {
  reviews:[]
};

MovieReviews.propTypes = {
  reviews: PropTypes.array
};

export default MovieReviews;
