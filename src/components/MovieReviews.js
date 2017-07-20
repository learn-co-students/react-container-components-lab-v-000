import React from 'react';

const Review = ({ review }) => {
  return (
  <div className="review">
      title="review.display_title"
      byline="review.byline"
      link="review.link.url"
      headline="review.headline"/>)
  </div>
  )
}

const MovieReviews = ({ reviews }) => {
  return (
  <div className ="review-list">
   { reviews.map(review => Review({ review })) }
   </div>
 )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
