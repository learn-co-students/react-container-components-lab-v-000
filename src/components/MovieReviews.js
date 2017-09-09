// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map(Review)}
    </div>
  );
}

MovieReviews.defaultProps = {
  reviews: [],
}

const Review = ({headline, byline})=> {
  return (
    <div className="review">
      <h2>{headline}</h2>
      <p>{byline}</p>
    </div>
  );
}

export default MovieReviews
