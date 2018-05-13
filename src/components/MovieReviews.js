import React, { Component } from 'react';

const Review = ({ byline, headline, summary_short, publication_date, link }) => {
  // this pre-organizes the props that are passed in by MovieReviews
  return (
    <div key={headline} className="review">
      <h3>Title: {headline}</h3>
      <h5>Reviewer: {byline}</h5>
      <p>Summary: {summary_short}</p>
      <p>Publish Date: {publication_date}</p>
    </div>
  )
};

// can use an arrow function here bc not much going on
// maps each of the reviews into a <Review />
const MovieReviews = ({ reviews }) => (
  <div className="review-list">
   {reviews.map(Review)}
  </div>
);

// make sure that the reviews default is []
MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
