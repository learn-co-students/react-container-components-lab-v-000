import React from 'react'

const MovieReviews = (props) => {
  const reviewMap = props.reviews.map(review => {
    return (
      <div key={review.display_title} className='review'>
        <p>{review.headline}</p>
      </div>
    )
  })

  return (
    <div className='review-list'>
      {reviewMap}
    </div>
  )
}

export default MovieReviews


