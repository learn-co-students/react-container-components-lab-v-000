import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.storeMovies = this.storeMovies.bind(this);

    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    fetch(URL).
    then(
      res => res.json()
    ).
    then(
      res => this.storeMovies(res)
    )
  }

  storeMovies(res) {
    this.setState({
      reviews: res.results
    })
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
