// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
  return(
    <div className="review-list">
    <ul>
      { props.reviews.map(review => <li className="review"> Review </li> )}
    </ul>
    </div>
  )
}

export default MovieReviews;
