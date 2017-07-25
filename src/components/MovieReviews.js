import React from 'react';

const showReviews = ({
  display_title,
  mpaa_rating,
  headline,
  summary_short
}) => {
  return (
    <div className = 'review'>
      <h1>{ display_title }</h1>
      <h3>{ mpaa_rating }</h3>
      <h2>{ headline }</h2>
      <h3>{ summary_short }</h3>
    </div>
  )
}

const MovieReviews = ({ reviews }) => {
  return (
    <div className = 'review-list'>
      {reviews.map(showReviews)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
