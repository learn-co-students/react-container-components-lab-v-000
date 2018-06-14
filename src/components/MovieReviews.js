// Code MovieReviews Here
import React from 'react'

const Review = ({newReview}) => {
  return(
  <p className='review'>{newReview}</p>
  )
}

const MovieReviews = ({reviews}) =>
  <div className='review-list'>
    {reviews.map(Review)}
  </div>;


MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
