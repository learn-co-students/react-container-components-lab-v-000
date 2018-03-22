import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  componentWillMount() {
    fetch(URL)
      .then(res => res.json())
      .then(response => this.setState
        ({ reviews: response.results })
      );
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h1> NYT Latest Reviews: </h1>
        <MovieReviews reviews = {this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;


//
// The LatestMovieReviewsContainer should have a top-level wrapping element with class latest-movie-reviews.
// The two container components you've been asked to create will use this single presentational component
// in different ways.
// The first, <LatestMovieReviewsContainer>, will fetch a list of the most recent reviews and display them
