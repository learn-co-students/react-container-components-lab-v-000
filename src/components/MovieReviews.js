// Code MovieReviews Here
import React from 'react';

const Review = (props) => {
  return (
    <div key={props.display_title} className="review">
      <h3>{props.display_title}</h3>
      <h4>Author: {props.byline}</h4>
      <p>{props.summary_short}</p>
    </div>
  )
}

const MovieReviews = (props) => {
  return (
    <div className="review-list">
      {props.reviews.map(Review)}
    </div>
  )
}

export default MovieReviews;
