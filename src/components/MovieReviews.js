// Code MovieReviews Here
import React from 'react';

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (
    <div className="review">
      <header>
        <a href={link.url} >{headline}</a><br/>
        <span>{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};


const MovieReviews = ({reviews}) => (
  <ul className="review-list">
    {reviews.map(Review)}
  </ul>
)

MovieReviews.defaultProps = {
  reviews: []
};


export default MovieReviews
