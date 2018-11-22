// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
  return(
    <div className="review-list">
      {reviews.map(review => <li className="review" key={review}>{review.summary_short}</li>)}
    </div>
  )
}

export default MovieReviews