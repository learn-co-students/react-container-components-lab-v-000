// Code MovieReviews Here
import React from 'react'

const Review = ({
  display_title,
  byline,
  headline,
  summary_short,
  link
}) => {
  return (
    <div className='review' key={headline}>
      <header>
        <a className='review-link' href={link.url}>{headline}</a>
      </header>

      <blockquote>{summary_short}</blockquote>
      <p>By {byline}</p>
    </div>
  )
}

const MovieReviews = ({ reviews }) => <div className='review-list'>{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews