// Code MovieReviews Here
import React from 'react';

const Movie = ({ display_title, mpaa_rating, byline, summary_short }) => {
  return (
    <div className="review">
      <h3>review</h3>
      <h3>{display_title}</h3>
      <h3>{mpaa_rating}</h3>
      <h3>{byline}</h3>
      <h3>{summary_short}</h3>
    </div>
  )
}

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(  Movie ) }
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
