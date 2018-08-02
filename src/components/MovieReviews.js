import React from 'react';

const Review = ({ display_title, byline, summary_short, opening_date, link }) => {
  return (
    <div className="review">
      <h2>{display_title}</h2>
      <h4>{byline}</h4>
      <p>{summary_short}</p>
      <p>{opening_date}</p>
      <a href={link.url}>Read the full review</a>
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
};

export default MovieReviews
