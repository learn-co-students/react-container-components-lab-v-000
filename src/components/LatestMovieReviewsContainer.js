import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'A053gIUuCtdU5c9bTVceP7lNZyrcgmTu';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(reviewData => this.setState({ reviews: reviewData.results }))
  }

  render() {
    return (
      <div>
        <MovieReviews movies={this.state.movies} />
      </div>
    )
  }
}
