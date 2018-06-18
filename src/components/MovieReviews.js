// Code MovieReviews Here
import React, { Component } from 'react';

const Review = ({headline, byline, link, summary_short, date_updated}) => {
  return (
    <div key={headline} className="review">
      <h2><a href={link.url}>{headline}</a></h2>
      <h2>Author: {byline}</h2>
      <h3>Last Updated: {date_updated}</h3>
      <p>{summary_short}</p>
    </div>
  )
}

const MovieReviews = ({reviews}) => {
  return(
    <div className="review-list">
      {reviews.map(Review)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
