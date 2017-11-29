import React from 'react'

const Review = ({title, rating, summary}) => {
  return (
    <div className='review'>
      <h3>{title}</h3>
      <h3>{rating}</h3>
      <p>{summary}</p>
    </div>
  )
}

const MovieReviews = ({reviews}) => (
  <div className='review-list'>
    {reviews.map(Review)}
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
