// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => {
  return (
    <div className ="review-list">
    {props.reviews && props.reviews.map( review =>
      <div className="review" key={review.headline}>
      <h1>{review.display_title}</h1>
      <p>{review.summary_short}</p>
      </div>
      )}
    </div>
    )
}

export default MovieReviews;