import React from 'react'

const Review = ({display_title, headline}) => {
  return (
    <div key={headline} className="review">
      <h3>{display_title}</h3>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
