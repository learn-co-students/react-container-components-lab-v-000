// Code MovieReviews Here
import React from 'react';
import Movie from './Movie';

const MovieReviews = ( {reviews}) => {
  return (
    < div className="review-list">
    { reviews.map(Movie) }
    </div>
  )
}


MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
