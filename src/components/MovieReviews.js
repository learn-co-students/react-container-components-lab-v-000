// Code MovieReviews Here
import React from 'react';
import PropTypes from 'prop-types';

const MovieReview = ({ display_title, byline, headline, summary_short }) => {
  return (
    <div className="review">
      <h3>{display_title}</h3>
      <h4>{byline}</h4>
      <h4>{headline}</h4>
      <p>{summary_short}</p>
    </div>
  )
}

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(MovieReview)}</div>

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
