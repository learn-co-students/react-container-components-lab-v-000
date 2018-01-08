// Code MovieReviews Here
import React, { Component } from 'react';

const Review = ({display_title, headline, critics_pick, summary_short}) => {
  return (
    <div className='review' key={display_title}>
      <p>Display Title: {display_title} </p>
      <p>Headline: {headline} </p>
      <p>Summary: {summary_short} </p>
      <p>Critics Pick: {critics_pick} </p>
    </div>
  )
}


const MovieReviews = ({reviews}) => <div className='review-list'>{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
