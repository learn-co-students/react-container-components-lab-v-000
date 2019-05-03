// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) =>(
  <div className="review-list">
  {
    reviews.map(review=>
    <div className="review" >
  <h1>{review.display_title} </h1>
  <p>{review.headline} </p>
  <p>{review.summary}</p>
  <h3>{review.byline}</h3>
  </div> )}
  </div>
)

export default MovieReviews;
