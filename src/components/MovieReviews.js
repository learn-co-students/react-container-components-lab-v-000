// Code MovieReviews Here

import React from 'react';

const MovieReviews = ({reviews}) => {
  return(
    <ul className='review-list'>
      {reviews.map(review => <li className='review'> {review.display_title}</li>)}
      </ul>
  )
}

MovieReviews.defaultProps = { 
  reviews: []
}

export default MovieReviews