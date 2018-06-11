// Code MovieReviews Here
import React from 'react';

const Review = ({ reviews }) => {
  return (<div className="review"><h1>Reviews: </h1><p> { reviews }</p></div>)
};

const MovieReviews = ( { reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
