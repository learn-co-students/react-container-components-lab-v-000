// Code MovieReviews Here
import React from 'react';
import PropTypes from 'prop-types';

const MovieReviews = (reviews) => {
  return (
  <div className="review-list">
    {reviews.reviews.map(review => (
      <div className="review">
        <h3>{review.display_title}</h3>
        <p>{review.summary_short}</p>
        <p>{review.critics_pick}</p>
      </div>
    ))}
  </div>
  )
}


MovieReviews.defaultProps = {
  reviews: [{
    display_title: "Western",
    summary_short: "Valeska Grisebach’s film evokes a classic American genre to tease out the contradictions of modern European capitalism.",
    critics_pick: 1,
  }]
};

export default MovieReviews;
