// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) =>
    <div className='review-list'>
      {reviews.map(Review)}
    </div>



const Review = ({headline, byline, summary_short, link}) => {
  return(
    <div key={headline} className='review'>
      <a href={link.url}>{headline}</a>
      <h4>{byline}</h4>
      <p>{summary_short}</p>
    </div>
  )
}

export default MovieReviews;
