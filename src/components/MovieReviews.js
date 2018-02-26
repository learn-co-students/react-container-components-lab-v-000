// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) => (
  <ul className="review-list">
    {reviews.map((review) => {
      return (
        <li key={review.display_title} className="review">
          Title: {review.display_title}
          Byline: {review.byline}
        </li>
      )
    })}
  </ul>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
