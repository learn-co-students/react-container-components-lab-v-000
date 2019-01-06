// Code MovieReviews Here
import React from 'react'

const showReviews = ({
  display_title
  , rating
  , summary_short
  , link
}) => {
  return (
    <div className="review">
      <h1>{display_title} - {rating}</h1>
      <p>{summary_short}</p>
      <a href={link.url}>More Info...</a>
    </div>
  )
}

const MovieReviews = ({ reviews }) => {
  return <div className="review-list">
    {reviews.map(showReviews)}
  </div>
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
