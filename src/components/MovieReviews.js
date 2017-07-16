import React from 'react';

const MovieReviews = ({reviews}) => {
    return (
      <div className="review-list">
        <div className="review">{reviews}</div>
      </div>
    );
  }

MovieReviews.defaultProps = {
  reviews: []
};


export default MovieReviews;