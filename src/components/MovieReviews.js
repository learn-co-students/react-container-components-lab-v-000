import React, { Component } from 'react';
const Review = ({title, rating}) => {
  return (
    <div className="review">
      <h3>{title}</h3>
      <p>{rating}</p>
    </div>
  )
}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;


MovieReviews.defaultProps = {
  reviews: []
};


export default MovieReviews
