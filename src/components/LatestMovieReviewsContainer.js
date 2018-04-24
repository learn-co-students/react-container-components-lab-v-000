import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from "./MovieReviews.js"
const NYT_API_KEY = 'f573fbc3bc74456abafc055f5f025912';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(URL)
      .then(response => {
        return response.json()
      })
      .then(res => this.setState({ reviews: res.results }))
  }

  render() {
    return (
      <h1 className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </h1>
    )
  }
}

export default LatestMovieReviewsContainer
