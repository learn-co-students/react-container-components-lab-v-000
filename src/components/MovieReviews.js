// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => (
  <ul className="review-list">
    {reviews.map(review => <li key={review.src} className="review">{review.display_title}</li>)}
  </ul>
)

MovieReviews.defaultProps = {
    reviews: []
}


export default MovieReviews;
