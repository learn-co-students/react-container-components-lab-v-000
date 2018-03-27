// Code MovieReviews Here
import React from 'react';

const Review = ({headline, byline, link, summary_short}) => {
  return (

    <div
    key = {headline}
    className="review">

      <h1>{headline}</h1>

      <h3 className="author">{byline}</h3>
      <a className="review-link">
      href={link.url}
      </a>
      <p>{summary_short}</p>
      </div>
    )
}
const MovieReviews = ({reviews}) => (
  <div className="review-list">
    {reviews.map(Review)}
  </div>
  )


MovieReviews.defaultProps = {
  reviews: []
}
export default MovieReviews
