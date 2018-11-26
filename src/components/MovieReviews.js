// Code MovieReviews Here
import React from 'react'
 
const MovieReviews = props => {
  return (
    <div className='review-list'>
      <ul>
        {props.reviews.map(review => (
          <li key={review.headline} className='review'>
            <p>Title: {review.display_title}</p>
            <p>Rating: {review.mpaa_rating}</p>
            <p>Summary: {review.summary_short}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
};
 
export default MovieReviews