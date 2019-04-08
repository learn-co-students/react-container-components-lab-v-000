import React from 'react';

const MovieReviews = ({ reviews }) => (
  <div>
    <ul className='review-list'>
      { reviews.map(review => <li className='review'>{review.headline}</li>)}
    </ul>
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
