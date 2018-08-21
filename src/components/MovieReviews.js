// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) =>
  <div className="review-list">
    {props.reviews.map(review => <a className="review" href={review.link.url}>{review.display_title}</a>)}
  </div>;


export default MovieReviews;