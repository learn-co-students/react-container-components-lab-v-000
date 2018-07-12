import React, { Component } from 'react';

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      { reviews.map( rev => <div className="review">rev</div> ) }
    </div>
  );
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
