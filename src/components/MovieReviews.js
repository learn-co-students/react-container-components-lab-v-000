import React, { Component } from 'react'

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(review => (
      <div className="review-list">
        <div className="review">
          <h2>Title: {review.display_title}</h2>
          <p>Summary: {review.summary_short}</p>
        </div>
      </div>
      ))}
  </div>
);

MovieReviews.defaultProps = {
  reviews: [],
}

export default MovieReviews;
