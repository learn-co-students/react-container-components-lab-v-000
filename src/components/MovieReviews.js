import React from 'react';
//stateless and functional
//review-list element
//review element

const MovieReviews = ({ reviews }) =>
<div className="review-list">{reviews.map(Review)}</div>;

const Review = ({headline, byline, link, summary_short}) => {
  return (
    <div key={headline} className="review">
      <header>
        <a className="review-link" href={link.url}>{headline}</a>
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
