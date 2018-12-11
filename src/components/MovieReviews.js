// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {

  return(
    <div className="review-list">
      <ul>
        {reviews.map(review => <li className="review"><a href={review.link.url}>{review.display_title}</a></li>)}
      </ul>
    </div>
  )
}

export default MovieReviews
