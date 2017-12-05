import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'd4d4a7f495ca435aa447f0c3f7243a50';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  componentWillMount() {
    fetch(URL)
      .then(response => response.json())
      .then(res => this.setState({ reviews: res.results }));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Latest Movie Reviews:</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
