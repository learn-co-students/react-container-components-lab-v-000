import React from 'react';

const review = ({display_title, critics_pick, summary_short}) => {
  return(
    <div key={display_title} className="review">
      <h3>Title: {display_title}</h3>
      <p>Rating: {critics_pick}</p>
      <p>Summary: {summary_short}</p>
    </div>
  )
};

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map(review)}
    </div>
  );
};

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
