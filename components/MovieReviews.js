import React from 'react';

const renderReview = ({
  headline,
  summary_short,
  opening_date,
  link
}) => {
  return (
    <div className="review">
      <h3><a href={link.url}>{headline}</a></h3>
      <p>Opening: {opening_date}</p>
      <p>{summary_short}</p>
    </div>
  )
}

const MovieReviews = ({ reviews }) => {
  return(
    <div key="1" className="review-list">
      {reviews.map(renderReview)}
    </div>
  );
};

MovieReviews.defaultProps = {
  reviews: []
};

module.exports = MovieReviews;
