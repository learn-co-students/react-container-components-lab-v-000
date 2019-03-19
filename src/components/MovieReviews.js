// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    { reviews.map((review) => {
      return(
        <div className="review">
          <h3>{ review.display_title } by: { review.byline }</h3>
          <p>{ review.summary_short }</p>
        </div>
      )
    })}
  </div>
)

export default MovieReviews
