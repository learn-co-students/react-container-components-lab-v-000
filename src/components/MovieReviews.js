// Code MovieReviews Here

import React from 'react';

const MovieReviews = ({reviews}) => {
  
  return (
    <div className="review-list">
      <ul>
        {reviews.map(review => 
          <li className="review">{review["display_title"]}</li>
        )}
      </ul>
    </div>
  )
  
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews