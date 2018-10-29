import React from 'react';

const Review = ({headline}) => {
  return (
    <div className="review">
      {headline}
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
