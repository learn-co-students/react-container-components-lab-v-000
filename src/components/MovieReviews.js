import React, { Component } from 'react';

const MovieReviews = ({ reviews }) =>
  <div className="review-list">{
    reviews.map(r =>
      <div className="review" key={r.headline}>
      <h1>{r.headline}</h1>
      <h2>{r.byline}</h2>
      <p>{r.summary_short}</p>
      </div>
    )}
    </div>

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
