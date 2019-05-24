import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const key = process.env.REACT_APP_NYT_API_KEY;
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${key}` ;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
  constructor(){
    super()

    this.state = { reviews: [] }
  }

  fetchReviews = (review) => {
    fetch(URL)
      .then(r => r.json())
      .then(r => this.setState({ reviews: r.results }));
  }

  componentDidMount() {
    this.fetchReviews();
  }

  render() {
    return (
      <div className="latest-movie-reviews">
      <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
