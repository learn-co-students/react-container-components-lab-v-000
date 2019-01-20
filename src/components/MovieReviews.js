import React, { Component } from 'react';

const Review = ({display_title,byline,headline,summary_short,link}) => {
  return (
    <div className="review">
      <h3><a href={link}>{headline}</a></h3>
      <h4>By: {byline}</h4>
      <p>{summary_short}</p>
    </div>
  )
}

const MovieReviews = ({reviews}) => {
    return (<div className="review-list">
      {reviews.map(Review)}
    </div>)
}

export default MovieReviews
