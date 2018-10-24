// Code MovieReviews Here
import React, { Component } from 'react';

function MovieReviews(props){
  return (
    <div className="review-list">
          {props.reviews.map(review => <div className="review"><p>{review.headline}</p></div>)}
    </div>
  )
}

export default MovieReviews
