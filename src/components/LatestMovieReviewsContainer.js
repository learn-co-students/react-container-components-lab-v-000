import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';
require('es6-promise').polyfill();

const NYT_API_KEY = '1c81a06819264e2ca6b1d2cd1a6a24dd';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: []
    }
  }

  fetchLatestReviews = () => {
    fetch(URL)
    .then(result => result.json())
    .then(response => this.setState({ reviews: response.results }));
  }

  componentDidMount = () => {
    this.fetchLatestReviews();
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
