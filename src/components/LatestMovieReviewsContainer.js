import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ad704d69c1a94d37965bc1a74f18e64b';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {
  state = {
      reviews: []
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(movies => this.setState({
        reviews: movies.results}))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Latest Movie Reviews</h1>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
export default LatestMovieReviewsContainer
