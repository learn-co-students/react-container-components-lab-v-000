import React from 'react';
// Code MovieReviews Here
const MovieReviews = ({reviews}) => {

    return (
      <div className="review-list">
        { reviews.map(review => <div className="review">
          <h4>{review.display_title}</h4><br></br>
          <p>{review.summary_short}</p>
          </div>) }
      </div>
    )
  }
export default MovieReviews;
