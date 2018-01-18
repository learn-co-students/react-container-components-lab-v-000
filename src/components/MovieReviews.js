import React from 'react';

const Review = ({summary}) => {
  return (
    <div className="review">
    <p>{summary}</p>
    </div>
  )
}

const MovieReviews = ({reviews}) =>
  <div className="review-list">
  {reviews.map(Review)}
  </div>;


MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
