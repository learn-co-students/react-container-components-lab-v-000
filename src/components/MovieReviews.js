import React from 'react';

const renderReview = ({headline, byline, link, summary_short }) => {
  return (
    <div className="review">
        <a href={link.url}>
          {headline}
        </a>
        <br/>
        <span className="author">{byline}</span>
      <p>{summary_short}</p>
    </div>
  );
};

const MovieReviews = ({ reviews }) => {
  return <div className="review-list">
    {reviews.map(renderReview)}
  </div>
};
MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
