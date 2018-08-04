// Code MovieReviews Here
import React, { Component } from 'react';

const Review = ({ title, author }) => {
  return (
  <div key={title} className="review">
    <h2>{ author }</h2>
    <h3>{ title }</h3>
  </div>
  )
}

const MovieReviews = ({ reviews }) =>
  <div className="review-list">
    { reviews.map(Review) }
  </div>


export default MovieReviews
