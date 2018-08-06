// Code MovieReviews Here
import React from 'react'

const MovieReview = ({ reviews }) => (
  <div className="review-list">
  {reviews.map((review, index) =>
    <div className="review" key={index}>
    <h1>Title:{review.display_title}</h1>
    <p>Critic Pick:{review.critics_pick}</p>
    <p>{review.headline}</p>
    </div>
  )}
  </div>
)

export default MovieReview
