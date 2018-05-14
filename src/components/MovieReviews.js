import React from 'react';

const Review = ({ display_title, mpaa_rating, headline, byline }) => {
  return (
    <div className="review">
      <h3>{display_title} {mpaa_rating}</h3>
      <h4>{headline}</h4>
      <h5>{byline}</h5>
    </div>
  );
};

const ReviewList = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

ReviewList.defaultProps = {
  reviews: []
};

export default ReviewList;
