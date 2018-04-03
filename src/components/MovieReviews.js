// Presentational Component //
import React from 'react';

const Review = ({ link, headline, byline, display_title, summary_short }) => {
  return (
    <div className="review">
      <h3><a href={link.url}>{headline}</a></h3>
      <h3>By: {byline}</h3>
      <p>Movie: {display_title}</p>
      <p>Summary: {summary_short}</p>
    </div>
  )
}

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(Review)}
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
