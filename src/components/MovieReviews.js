import React from 'react';

const Review = ({ headline, byline, summary_short, link}) => {
  return(
    <div className="review">
    <h2><a href={link} target="_blank">{headline}</a></h2>
    <h3>{byline}</h3>
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

export default MovieReviews;
