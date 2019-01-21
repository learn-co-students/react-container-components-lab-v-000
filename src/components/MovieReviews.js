// Code MovieReviews Here
import React from "react";

const Review = ({ headline, byline, link, summary_short }) => {
  return (
    <div key={headline} className="review">
      <a href={link.url}>review link</a>
      <p>{byline}</p>
      <blockquote>{summary_short}</blockquote>
    </div>
  )
}

const MovieReviews = ({ reviews }) =>
  <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};



export default MovieReviews;
