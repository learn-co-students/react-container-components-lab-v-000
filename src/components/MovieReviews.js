// Code MovieReviews Here
import React from "react";

const Review = ({ title }) => (
  <div className="review">
    <p>{title}</p>
  </div>
);

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(review => (
      <Review key={review.display_title} title={review.display_title} />
    ))}
  </div>
);

export default MovieReviews;
