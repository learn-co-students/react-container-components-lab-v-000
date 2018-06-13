// Code MovieReviews Here
import React from 'react'

const Review = ({newReview}) => {
  return(
  <p>{newReview}</p>
  )
}

const MovieReviews = ({reviews}) => {
  return (
  <div className='review-list'>
    {reviews.map(review => <Review newReview="review"/>)}
  </div>
  )
}

MovieReviews.defaultProps = {reviews: []}

export default MovieReviews
