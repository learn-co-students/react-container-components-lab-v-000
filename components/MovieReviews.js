import React from 'react';

const MovieReviews = ({reviews}) => {
  return (
    <div className='review-list'>
    {
      reviews.map((r, index) => (
        <div className='review' key={index}>Review</div>
      ))
    }
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: ['Hello']
}

module.exports = MovieReviews