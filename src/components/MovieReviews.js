// Code MovieReviews Here
import React from 'react';

const renderReview = ({  display_title,
  mpaa_rating,
  headline,
  critics_pick,
  summary_short,
  link
  }) => {
  return (
    <div className="review">
     <h3>{display_title}</h3>
     <h4>{headline}</h4>
     <p>Summary: {summary_short}</p>
     <p>Rating: {mpaa_rating}</p>
     <p>Critics Pick: {critics_pick}</p>
     <p>URL: <a href="{link.url}">{link.url}</a></p>
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

export default MovieReviews;
