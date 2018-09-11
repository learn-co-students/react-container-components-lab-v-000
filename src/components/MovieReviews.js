// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
  const reviewList = props.reviews.map(rev => {
    return (
      <div key={rev.display_title} className='review'>
        <p>{rev.headline}</p>
      </div>
    )
  })

  return (
    <div className='review-list'>
      {reviewList}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
