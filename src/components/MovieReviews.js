// Code MovieReviews Here
import React from "react";

const Review = ({ headline, display_title, summary_short }) => {
  return (
    <div key={display_title} className="review">
      <header>
        <h1>{headline}</h1>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => (
  <div className="review-list">{reviews.map(Review)}</div>
);

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
