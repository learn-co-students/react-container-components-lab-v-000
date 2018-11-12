// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => {
  return (<div className="review-list">
    {reviews.map((review) => <p className="review">{review.summary}</p>)}
  </div>
  )
}

export default MovieReviews
