

import React, { Component } from 'react';

const MovieReviews = ({ reviews }) =>
  <div className="review-list"> {
  reviews.map(review =>
    <div className="review" key={review.headline}>
      <h3>{review.headline}</h3>
      <p>{review.byline}</p>
      <p>{review.summary_short}</p>
      <a href={review.link.url}>Link to the full review</a>
    </div>)
  }
  </div>

  MovieReviews.defaultProps = {
    reviews: []
  }

export default MovieReviews
