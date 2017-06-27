// Code MovieReviews Here
import React from 'react';

function formatReview(review) {
  return (
    <div className="review">
      <h3>{review.headline}</h3>
      <h5>By: {review.byline}</h5>
      <p>{review.summary_short}</p>
    </div>
  )
}

export default function MovieReviews({reviews}) {
  return (
      <div className="review-list">
        {reviews.map(formatReview)}
      </div>
    )
}

MovieReviews.defaultProps = {
  reviews: []
}
