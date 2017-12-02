import React, { Component } from 'react';
import MovieReviews from './MovieReviews';

import 'isomorphic-fetch';

const NYT_API_KEY = '26ecb4626a4149b99a280d526b3910eb';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      reviews: []
    };
  }

  componentWillMount() {
      fetch(URL)
        .then(response => response.json())
        .then(reviewsJSON => this.setState({ reviews: reviewsJSON.results }));
    }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}

export default LatestMovieReviewsContainer;
