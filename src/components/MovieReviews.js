import React, { Component } from "react";
//import LatestMovieReviewsContainer from "./LatestMovieReviewsContainer";

const MovieReviews = props => {
  return (
    <div className="review-list">
      {props.reviews.map(review => (
        <p>{review.display_title}</p>
      ))}
    </div>
  );
};

export default MovieReviews;
