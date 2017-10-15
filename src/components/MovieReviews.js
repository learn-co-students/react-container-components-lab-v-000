
import React, { Component } from 'react';
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;



const Review = ({ review }) => {
  return (
    <div className="review">
      <h3>{review}</h3>
    </div>
  )
}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;


MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
