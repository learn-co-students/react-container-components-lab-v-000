import React from 'react';

const renderReview = ({display_title, link, summary_short}) => {
  return(
    <div className="review">
      <h1>{display_title}</h1>
      <h2>{link.url}</h2>
      <p>{summary_short}</p>
    </div>
  );
};

const MovieReviews = ({reviews}) => {
  return <div className="review-list">
    {reviews.map(renderReview)}
  </div>
};

MovieReviews.defaultProps = {
  reviews: []
};


export default MovieReviews;
