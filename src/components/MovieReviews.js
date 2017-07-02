// Code MovieReviews Here
import React from 'react';


function formatReview(review){
  return(
    <div className="review">
      <h2>{review.headline}</h2>
      <h3>Created By: {review.byline}</h3>
      <p>{review.summary_short}</p>
    </div>
  )
}

export default function MovieReviews({reviews}){
  return(
    <div className="review-list">
      {reviews.map(formatReview)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}
