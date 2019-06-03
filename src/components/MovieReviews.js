import React from 'react';

const Review = ({headline, link }) => {
  return (
    <div className="review" key={headline}>
      <a className="review-link" href={link.url}> {headline} </a>
    </div>
  );
};

const MovieReviews = ({ reviews }) =>
<div className="review-list">
  {reviews.map(Review)}
</div>;

export default MovieReviews;
