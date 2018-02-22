import React from 'react';

const MovieReviews = ({reviews}) => (
  <div className="review-list">
   {reviews.map(review => (
     <div className="review">
       <h1>{review.display_title}</h1>
       <p>{review.summary_short}</p>
     </div>
   ))}
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
