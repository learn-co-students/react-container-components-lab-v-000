import React, { Component } from 'react';
 
const MovieReviews = ({ reviews }) => (	
  <div className="review-list">
    {reviews.map(review => 
	    <div className="review">
	      <h3>{review.display_title}</h3>
	    </div>
    )}
  </div>
);
 
MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews;