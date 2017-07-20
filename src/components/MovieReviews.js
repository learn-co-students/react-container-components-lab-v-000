import React, { Component } from 'react';

const MovieReviews = ({ reviews }) => {

  const renderReviews = reviews.map((reviews) =>
    <div className="review" />
  );

  return (
    <div className="review-list">
      {renderReviews}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: 'default value'
};

export default MovieReviews;
