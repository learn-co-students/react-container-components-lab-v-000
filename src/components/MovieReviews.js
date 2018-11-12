import React from 'react'

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (
    <div className="review">
      {headline}
      {byline}
      {summary_short}
    </div>
  )
}

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
