import React, { Component} from 'react';
// Code MovieReviews Here
const Review = ({ headline, link, critics_pick }) => {
  return (
    <div className='review'>
      <h3>{headline}</h3>
      <ul>
        <li><a href={link.url}>Link</a></li>
        <li>Critics pick: {critics_pick}</li>
      </ul>
    </div>
  );
};

const MovieReviews = ({reviews}) => {
  return (
    <div className='review-list'>
      {reviews.map(Review)}
    </div>
  );
};

MovieReviews.defaultProps = { reviews: [] };

export default MovieReviews;
