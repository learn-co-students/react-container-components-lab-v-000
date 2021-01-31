// Code MovieReviews Here
import React, { PureComponent } from 'react';
import Review from './Review';

const MovieReviews = props => {
  return <div className="review-list">
    <ul>
      {props.reviews.map((review) =>
        <li key={review.display_title}><Review review={review} /></li>
      )}
    </ul>

  </div>
}

export default MovieReviews;