import React from 'react';


const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(review => (
      <div className="review">
        <h4>{review.display_title}</h4>
      </div>
    ))}
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
