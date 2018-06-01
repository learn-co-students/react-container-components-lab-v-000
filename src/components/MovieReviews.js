// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) => (
   <div className="review-list">
      {reviews.map(review => {
          return (
          <div className="review" review={review}>
            <h1>{review.headline}</h1>
          </div>
          );
        })
      }
    </div>
  );

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
