// Code MovieReviews Here
import React from 'react';

const Review = ({ headline, summary_short }) => {
  return (
    <div>
      <h3>{headline}</h3>
      <p>{summary_short}</p>
    </div>
  )
}
const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map(review => <Review className= "review" headline="review.headline" summary="review.summary_short"/>)}
    </div>
  )
};

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
