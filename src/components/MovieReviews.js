import React from 'react';

const Review = ({ display_title, byline, summary_short }) => {
  return (
    <div className='review'>
      <h1>{ display_title }</h1>
      <h3>{ byline }</h3>
      <p>{ summary_short }</p>
    </div>
  )
}

const MovieReviews = ({ reviews }) => {
  return (
    <div className='review-list'>
      { reviews.map(Review) }
    </div>
  );
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;