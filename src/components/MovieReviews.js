// Code MovieReviews Here
import React from 'react'

const Review = ({headline, byline, link, summary_short}) => {
  return (
    <div key={headline} className="review">
      <header>
        <a href={link.url}>{headline}</a>
        <h5>BY {byline}</h5>
      </header>
      <p>{summary_short}</p>
    </div>
  )
}

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
