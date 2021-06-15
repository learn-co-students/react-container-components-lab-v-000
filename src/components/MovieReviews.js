// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ reviews }) => {
  <div className="review-list">
    {reviews.map(Review)}
  </div>
}

const Review = ({
  display_title,
  byline,
  headline,
  summary_short,
  opening_date,
  link
}) => {
  return (
    <div key={headline} className="review">
      <header>
        <a className="review-link" href={link.url}>{headline}, by {byline}</a><br/>
      </header>
      <blockquote>{summary_short}</blockquote>
      <small>{display_title} opens {opening_date}</small>
    </div>
  )
}


export default MovieReviews