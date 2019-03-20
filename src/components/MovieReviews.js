import React from 'react'

const Review = ({headline, link, summary_short}) => {
  return (
    <div key={headline} className="review">
      <hr></hr>
      <h4>{headline}</h4>
      <h5><i>{summary_short}</i></h5>
      <h5><a href={link.url}>{link.url}</a></h5>
    </div>
  )
}

const MovieReviews = ({reviews}) => (
  <div className="review-list">{reviews.map(Review)}</div>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
