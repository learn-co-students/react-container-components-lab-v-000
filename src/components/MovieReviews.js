import React from 'react';

const Reviews = ({ reviews }) => {
  return (
  <div className="review">
    <p>{reviews}</p>
  </div>
  )
}

const MoviewReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(Reviews)}
  </div>
)

MoviewReviews.defaultProps = {
  reviews: []
}

export default MoviewReviews
