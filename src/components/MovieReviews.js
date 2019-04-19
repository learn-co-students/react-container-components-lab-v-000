// Code MovieReviews Here

import React from 'react';

const Review = ({ headline, byline, link, summary_short }) => (
  <div className="review">
    <h2>{ headline }</h2>
    <h3> author: { byline }</h3>
    <a href={link.url} > link </a>
    <h4> summary: {summary_short} </h4>
  </div>
);


const MovieReviews = ({ reviews }) =>
  <div className="review-list">
    { reviews.map(Review)}
  </div>;


  MovieReviews.defaultProps = {
    reviews: []
  };

  export default MovieReviews;
