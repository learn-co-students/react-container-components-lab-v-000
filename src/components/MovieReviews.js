import React from 'react'
import MovieReview from './MovieReview'

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    { reviews.map((r) => {
      return (
        <div className='review'>
          <MovieReview
            title={ r.display_title }
            summary={ r.summary_short }
          />
        </div>
      )}
    ) }
  </div>
)

export default MovieReviews
