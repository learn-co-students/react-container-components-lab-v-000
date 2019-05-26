import React, { Component } from 'react';

const Review = ({ display_title, mpaa_rating, critics_pick, summary_short }) => (
  <div className="review">
    <h3>{ display_title }</h3>
    <h2>{ mpaa_rating }</h2>
    <h2>{ critics_pick }</h2>
    <h2>{ summary_short }</h2>
  </div>
)


const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
