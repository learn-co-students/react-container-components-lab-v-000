// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => (
  <ul className="review-list">
    {reviews.map((rev) => <li className="review">{rev.mpaa_rating} - {rev.byline}</li>)}
  </ul>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
