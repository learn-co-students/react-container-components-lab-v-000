import React from 'react'

const Review = ({ headline, byline, summary_short, link }) => {
  return (
    <div key={headline} className="review">
      <a className="review-link" href={link.url}>{headline}</a><br/>
      <span className="author">{byline}</span>
      <h4>{summary_short}</h4>
    </div>
  )
}

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
