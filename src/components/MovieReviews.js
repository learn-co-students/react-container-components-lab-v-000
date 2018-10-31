// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => (
  <div className="review-list">
    {reviews.map(review => <div key={review.display_title} className="review"><a href={review.link.url} target="_">{review.display_title}</a></div>)}
  </div>
)

export default MovieReviews
