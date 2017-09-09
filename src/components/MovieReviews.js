// Code MovieReviews Here
import React from 'react';

const fromReview = ({ summary_short, display_title }) => {
  return (
    <div key={display_title} className="review">
      <p>{ summary_short }</p>
    </div>
  )
}

const MovieReviews = ({reviews}) => {
    return (
      <div className="review-list">
       {reviews.map(fromReview)}
      </div>
    )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
