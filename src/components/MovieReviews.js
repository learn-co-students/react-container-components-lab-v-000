import React from 'react';

const MovieReviews = ({reviews}) => <div className = 'review-list'>{reviews.map(Review)}</div>

const Review = ({
  display_title,
  byline,
  summary_short,
  link
}) => {
  return (
    <div key={display_title} className = 'review'>
      <header>
        <a className = 'review-link' href={link.url}>{display_title}</a><br/>
        <span className = 'author'>{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
