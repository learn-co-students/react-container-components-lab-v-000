import React from "react";

const Review = ({ headline, byline, link, summary_short }) => {
  return <div key={headline} className="review" />;
};

const MovieReviews = ({ reviews }) => (
  <div className="review-list">{reviews.map(Review)}</div>
);

export default MovieReviews;
