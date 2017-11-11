// Code MovieReviews Here
import React from 'react';

const Review = ({ display_title, critics_pick }) => {
  return (
    <div className="review">
      <h3>{display_title}</h3>
      <p>{critics_pick}</p>
    </div>
  )}

const MovieReviews = ({ reviews }) => (
<div className="review-list">{reviews.map(Review)}</div> )

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews