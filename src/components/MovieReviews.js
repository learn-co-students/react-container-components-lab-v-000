// Code MovieReviews Here
import React from 'react'

const Review = ({ headline, byline, link, summary_short }) => {
  return (
    <div className="review">
      <h2><a href={link.url}>{headline}</a></h2>
      <h3>Author: { byline }</h3>
      <h4>{summary_short}</h4>
    </div>
  )
}

const MovieReviews = ({ reviews }) =>
  <div className="review-list">
    { reviews.map(Review)}
  </div>

  MovieReviews.defaultProps = {
    reviews: []
  };

export default MovieReviews
