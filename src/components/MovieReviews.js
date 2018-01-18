// Code MovieReviews Here
import React from 'react'

const MovieReview = ({reviews}) => {
  return (
    <div className='review'>
      <p>{reviews}</p>
    </div>
  )
}

const MovieReviews = ({reviews}) => {
  return (
    <div className='review-list'>
      {reviews.map(MovieReview)}
    </div>)
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
