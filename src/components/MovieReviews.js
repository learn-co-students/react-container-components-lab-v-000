// Code MovieReviews Here
import React from 'react';
import MovieReviewList from './MovieReviewList';

const MovieReviews = (props) =>{
    return (
      <div className="review-list">
        <MovieReviewList movieReviews={props.reviews} />
      </div>
    );
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
