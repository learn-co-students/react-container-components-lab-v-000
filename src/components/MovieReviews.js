import React from 'react';

const MovieReviews = ({ reviews }) => (
    <div className="review-list">
      {
        reviews.map(review => ReviewItem({review}))
      }
    </div>
);

const ReviewItem = ({ review }) => (
  <div className="review">
    {review.display_title}
  </div>
);

MovieReviews.defaultProps = { reviews: 'Test Review' };

export default MovieReviews;
