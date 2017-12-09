import React from 'react';

const Review = ({headline, link }) => {
  return (
    <div className="review">
      <h2><a href={link.url}>{headline}</a></h2>
    </div>
  )
}

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(Review)}
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
