// Code MovieReviews Here
import React from 'react';
import MovieReview from './MovieReview';

const MovieReviews = ({ reviews }) => {
  return (
      <div className="review-list">
        {reviews.map(review =>
          <div className="review">
            <MovieReview key={review.headline} displayTitle={review.display_title} />
          </div>
          )}
      </div>
    )
  }

export default MovieReviews;
