import React from 'react'

const Review = ({
  display_title,
  headline,
  byline,
  summary_short,
  link
}) => (
  <div className="review" key={display_title} >
    <h4><a href={link.url}>{headline}</a></h4>
    <em>{byline}</em>
    <p>{summary_short}</p>
  </div>
)

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(Review)}
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
