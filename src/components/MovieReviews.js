// Code MovieReviews Here

import React, { Component } from 'react';

const MovieReview = ({reviews}) => {
  return (

    <div className="review-list">
      {reviews.map(review =>
        <div className="review">
          <h3>{review.display_title}</h3>
          <p>{review.author}</p>
        </div>)}
    </div>

  );
};

MovieReview.defaultProps = {
  reviews: "reviews"
};

export default MovieReview
