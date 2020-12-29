// Code MovieReviews Here
import React, { Component } from 'react';

const MovieReviews = ({ reviews }) => {


  // const listReviews = reviews.map({
  //   review => review.
  // })

  return(
    <div className="review-list">
      3 hi from MovieReviews
      { reviews.map( review => <li className="review">{review.headline}</li>) }
    </div>
  )
}


export default MovieReviews;
// { reviews.map{ review =>  <li>review</li>}
