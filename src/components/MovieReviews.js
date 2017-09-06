// Code MovieReviews Here
import React, { Component } from 'react';

const Review = ({ display_title, critics_pick, summary_short, publication_date }) => {
  return (
    <div className="review">
      <h3>Title: {display_title}</h3>
      <p>Published: {publication_date}</p>
      <p>Score: {critics_pick}</p>
      <p>Summary: {summary_short}</p>
    </div>
  );
}

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(Review)}
  </div>
);

MovieReviews.defaultProps = {
  reviews: [],
};

export default MovieReviews;
