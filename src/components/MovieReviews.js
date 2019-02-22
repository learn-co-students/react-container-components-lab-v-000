// Code MovieReviews Here
import React from 'react';

const Review = ({ byline, headline }) => {
  return (
    <div className='review' key={ headline }>
      <h1>{ headline } - { byline }</h1>
    </div>
  )
}

const MovieReviews = ({ reviews }) => {
  return(
    <div className="review-list">
      { reviews.map(Review) }
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
