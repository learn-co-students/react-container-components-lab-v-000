// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => (
  <div className="review-list">
   {reviews.map(review => (
     <div className="review">
       <h1>{review.display_title}</h1>
       <h4>{review.byline}</h4>
       <h4>{review.publication_date}</h4>
       <span>{review.headline}</span>
       <p>{review.summary_short}</p>
     </div>
   ))}
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
