// Code MovieReviews Here
import React, { Component } from 'react';

const MovieReviews = props => {
  return (
    <div className="review-list">
      <ul>
        {props.reviews.map(function(review) {
          return (<li className="review">
            {review.byline} - {review.summary_short}
          </li> )
        })}
      </ul>
    </div>
  )
}





export default MovieReviews;
