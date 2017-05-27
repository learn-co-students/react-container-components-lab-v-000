import React from 'react';


const renderReview = ({
  display_title,
  summary_short,
  link
}) => {
  return (
    <div className="review" key={display_title}>
      <h3 className="title">{display_title}</h3>
      <p className="summary">{summary_short}</p>
      <a href={link.url}>{link.suggested_link_text}</a>
    </div>
  )
};

const MovieReviews = ({reviews}) => {
  return <div className="review-list">
      {reviews.map((record) => renderReview(record))}
    </div>
};

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
