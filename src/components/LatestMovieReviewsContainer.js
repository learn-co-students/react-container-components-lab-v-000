import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = '45bf6d0b918b401483927816686f5d1d';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// fetch a list of the most recent reviews and display them
// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
  constructor(){
    super();

    this.state = {
      reviews: []
    };
  }

  componentWillMount() {
    fetch(URL)
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>The Latest Reviews:</h2>
        <MovieReviews reviews = {this.state.reviews} />
      </div>
    );
  }
}

export default LatestMovieReviewsContainer
