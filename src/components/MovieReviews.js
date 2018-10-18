import React from 'react';

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (
    <div className="review">
      <h2>{headline}</h2>
      <h4>{byline}</h4>
      <p>{summary_short}</p>
    </div>
  )
}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
