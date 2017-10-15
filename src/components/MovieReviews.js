
import React, { Component } from 'react';
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


const MovieReview = ({ review }) => {
  return (
    <div className="review">
      <h3>{review}</h3>
    </div>
  )
}


class MovieReviewsContainer extends Component {
  //  constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="review-list">
        {movieReviews.map(movieReview => <MovieReview review="movieReview.review" />)}
      </div>
    )
  }
}

MovieReviewsContainer.defaultProps = {
  reviews: ""
};


export default MovieReviewsContainer;
