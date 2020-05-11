import React from 'react'
import Movie from './Movie'

 
const MovieReviews = ({reviews}) => {
  return (
    <ul className="review-list">
      {reviews.map((review) =>
      <li className="review">
      {review.display_title}</li>
      )}
    </ul>)
}

export default MovieReviews