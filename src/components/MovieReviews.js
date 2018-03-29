import React, { Component } from 'react';

const singleReview = (reviews) => {
  if (reviews.length > 0) {
    return reviews.map((review, i) => <li key={i} className="review">{review.display_title}</li>)
  }
}

const MovieReviews = ({ reviews }) => {
    return (
      <ol className="review-list">
        {singleReview(reviews)}
      </ol>
    )
}

MovieReviews.defaultProps = { reviews: [] }

export default MovieReviews
