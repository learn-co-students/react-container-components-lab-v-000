// Code MovieReviews Here
import React, { Component } from 'react';



const MovieReviews = (props) =>
<div className="review-list">

{props.reviews.map(review => {
  return(
  <div className="review">
  {review.summary_short}
  </div>
)
})}


</div>


export default MovieReviews
