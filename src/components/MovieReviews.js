// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
  return (
    <div className="review-list">
      <ul>
        {props.reviews.map((review, index) => <li key={index} className="review">{review.headline}</li>)}
      </ul>
    </div>
  )
}

export default MovieReviews