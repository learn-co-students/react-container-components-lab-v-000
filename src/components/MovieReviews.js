// Code MovieReviews Here
import React, { Component } from "react"

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(review => (
      <div>
        <h1> {review.display_title}</h1>
        <p> {review.summary_short}</p>
      </div>
    ))}
  </div>
)

MovieReviews.defaultProps = { reviews: "Movie review" }
export default MovieReviews
