import React from 'react';

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      { reviews.map(r => <div className="review">r</div>)}
    </div>
  );
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;