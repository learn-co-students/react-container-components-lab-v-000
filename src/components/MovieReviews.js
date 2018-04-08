import React from 'react';

const Review = ({ headline, byline, summary_short }) => {
  return (
    <div className="review">
      <h3>{headline}</h3>
      <h4>{byline}</h4>
      <p>{summary_short}</p>
    </div>
  )
}

const ReviewList = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(Review)}
  </div>
);

ReviewList.defaultProps = {
  reviews: []
};

export default ReviewList;