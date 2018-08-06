import React from 'react';

const MovieReview = ({reviews}) => (
  <div className="review-list">
    {reviews.map((review, idx) =>
      <div className="review" key={idx}>
        <h3>Movie Title: {review.display_title}</h3>
        <p>Description: {review.summary_short}</p>
        <spen>Release Date: {review.opening_date}</spen>
        <h5>MPAA Rating: {review.mpaa_rating}</h5>
    </div>)}
  </div>
)

export default MovieReview;
