import React, { Component } from 'react';
export default MovieReviews

function format(review){
  return(
    <div className="review">
      <h3>{review.display_title}</h3>
    </div>
  )
} 

function MovieReviews({reviews}) {
  return (
    <div className="review-list">
      {reviews.map(format)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}