// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>

const Review = ({
  display_title,
  byline,
  headline,
  summary_short,
  opening_date,
  link
}) => {
  debugger
  return (
    <div key={headline} className="review">
      <header>
        <a className="review-link" href={link.url}>{headline}</a>, by {byline}<br/>
      </header>
      <blockquote>{summary_short}</blockquote>
      <small><em>{display_title} opens {opening_date}</em></small>
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}


export default MovieReviews