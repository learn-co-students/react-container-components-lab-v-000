// Code MovieReviews Here
import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="review" key={review.display_title}>
      <h1>{review.display_title}</h1>
      <h2>{review.byline}</h2>
    </div>
  )
};

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map(review => Review({ review }))}
    </div>
  )
};

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
