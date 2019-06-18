// Code MovieReviews Here
import React from 'react';

const Review = ({
  headline,
  link,
  display_title
}) => {
  return (
    <div className='review' key={display_title}>
      <ul>
        <li> {headline} <span><a href={link.url}>See Review</a></span></li>
      </ul>
    </div>
  )
};

const MovieReviews = ({ reviews }) => <div className='review-list'> {reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
