import React from 'react';

const MovieReviews = ({ reviews }) => (
  <div className='review-list'>
    <ul>
      { reviews.map(review => <li className='review'>{review.headline}</li>)}
    </ul>
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
