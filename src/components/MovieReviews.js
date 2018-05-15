// Code MovieReviews Here
import React from 'react';

const Review = ({byline, headline, summary_short, publication_date}) => {
  return (
    <div key={headline} className='review'>
      <h3>Title: {headline}</h3>
      <h5>Reviewer: {byline}</h5>
      <p>Summary: {summary_short}</p>
      <p> Published: {publication_date}</p>
    </div>
  )
}

const MovieReviews = ({reviews}) => {
  return (
    <div className='review-list'>
      {reviews.map(Review)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
