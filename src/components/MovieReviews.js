import React from 'react'

const Review = ({ display_title, summary_short, link }) => {
  return (
    <div className='review'>
      <a href={link.url}>{display_title}</a>
      <p>{summary_short}</p>
    </div>
  )
}
const MovieReviews = ({ reviews }) => (
  <div className='review-list'>{reviews.map(Review)}</div>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
