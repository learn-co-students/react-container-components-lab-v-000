import React from 'react';

const Review = ({headline, display_title, byline, summary_short, publication_date}) => {
  return (
    <div key={headline} className='review'>
      <h1>Title: {headline}</h1>
      <h2>Movie: {display_title}</h2>
      <h3>Reviewer: {byline}</h3>
      <p>Published: {publication_date} </p>
      <p>Summary: {summary_short}</p>

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
  reviews: []
};

export default MovieReviews;
