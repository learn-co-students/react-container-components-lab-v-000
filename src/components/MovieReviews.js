import React from 'react';

const Review = ({headline,byline,link}) => {
  return(
    <div key={headline} className="review">
      <a href={link}>{headline} - {byline}</a>
    </div>
  );
};

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>

export default MovieReviews;
