import React from 'react';

const MovieReviews = ({ reviews }) =>  <div className="review-list">
      {reviews.map(review => <p className="review">{review.display_title}</p>)}
    </div>

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;