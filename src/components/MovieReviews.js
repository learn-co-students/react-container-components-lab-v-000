import React from 'react';

const Review = ({ headline, byline, link, summary_short }) => {
  return (
    <div className="review" key={headline} >
      <h3><a className="review-link" href={link.url} >{headline}</a></h3>
      <p className="byline">by: {byline}</p>
      <p>{summary_short}</p>
    </div>
  );
};

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(Review)}
  </div>
);

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
