// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ reviews }) => {
  
  return(
  <div className="review-list">
  {reviews.map(review =>
    <div className="review">
      <h4>{review.display_title}</h4>
      <p>MPAA: {review.mpaa_rating}</p>
      <p>{review.headline}</p>
    </div>
    )
  }
 </div>
  )
}

export default MovieReviews
