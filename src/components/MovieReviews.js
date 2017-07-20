import React from 'react'

const MovieReviews = ({ reviews }) => {
  return (
    <div  className="review-list">
    {reviews.map((review, i) => (
      <div className='review' key={i}></div>
    ))}
    </div>
  )
};

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews