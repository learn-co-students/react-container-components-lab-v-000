// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => {
  return (
    <div className="review-list">
      {props.reviews.map(review => <li className="review" key={review}>{review}</li>)}
    </div>
  )
}

export default MovieReviews;
