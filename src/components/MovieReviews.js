import React from 'react'

const Review = ({review}) => {
  return (
    <div key={review.display_title} className="review">
      <h1>{review.display_title}</h1>
      <h3>{review.byline}</h3>
    </div>
  )
}

const MovieReviews = ({ reviews }) => 
  <div className="review-list">
    {reviews.map(review => Review({review}))}
  </div>;

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews