// Code MovieReviews Here

import React, { Component } from 'react';

const MovieReview = ({reviews}) => {
  debugger;

  return (

    <div className="review-list">
      {reviews.map(review =>
        <div className="review">
          <h3>{review.display_title}</h3>
          <p>{review.byline}</p>
        </div>)}
    </div>

  );
};

MovieReview.defaultProps = {
  reviews: "reviews"
};

export default MovieReview
