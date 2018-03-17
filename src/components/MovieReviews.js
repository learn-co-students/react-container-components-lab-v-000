// Code MovieReviews Here
import React, { Component } from "react"

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(review => (
      <div className="review-list">
        <span className="review">
          <h1> Title: {review.display_title}</h1>
          <p> Review summary:{review.summary_short}</p>
        </span>
        <div />
      </div>
    ))}
  </div>
)

MovieReviews.defaultProps = { reviews: "Movie review" }
export default MovieReviews
