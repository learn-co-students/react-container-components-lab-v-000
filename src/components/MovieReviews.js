import React, { Component } from 'react';

const Review = ({ headline, byline, critics_pick, summary_short })  => {
  return (
    <div className="review">
      <h3>{headline}</h3>
      <h5>{byline}</h5>
      <h6>Rating: {critics_pick}</h6>
      <p>{summary_short}</p>
    </div>
  )
}

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map(Review)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: [],
}

export default MovieReviews;
