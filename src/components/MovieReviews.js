// Code MovieReviews Here// Code MovieReviews Here
import React, { Component } from 'react';

const MovieReviews = ({reviews}) => {


    return(
      <div className="review-list">
      {reviews.map(review => {
        return(
          <div className="review">
          {review.display_title}
          </div>
        )
      })}
      </div>
    )
  }

MovieReviews.defaultProps = {
  reviews: []
}
export default MovieReviews;
