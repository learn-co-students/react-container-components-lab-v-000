import React from 'react';

const Review = ({
  headline,
  byline,
  publication_date,
  summary_short,
  link
}) => {
  return (
    <div key={headline} className="review">
      <h2><a href={link.url}>{headline}</a></h2>
      <h5>By: {byline},  published on {publication_date}</h5>
      <p>Summary: {summary_short}</p>
      <hr/>
    </div>
  )
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
