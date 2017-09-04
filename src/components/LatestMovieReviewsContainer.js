import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '28f872e13cd54fb8af6272f519915996';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.setState({
      movieReviews: []
    })
  }

  componentWillMount() {
    // fetch away
    fetch(URL)
      .then(resp => resp.json())
      .then(movieReviews => this.setState({movieReviews}));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
      <MovieReviews movieReviews={this.state.movieReviews}/>
      </div>

    );
  }
}
