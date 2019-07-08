import React from 'react';

const Review = ({ headline, byline }) => (
    <div className="review">
      <h2>{headline}</h2>  
      <h3>{ byline }</h3>
    </div>
  )
   
  
  const MovieReviews = ({ reviews }) => (
    <div className="review-list">
      { reviews.map(Review) }
    </div>
  )

  export default MovieReviews