import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '4Z9hrsWVzDkrL07jdPcfsA9aoB8Kh620';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: []
    }
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <h1>Latest Movie Reviews</h1>
        <MovieReviews reviews={ this.state.reviews } />
      </div>
    )
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => this.setState({ reviews: data.results }));
  }
}

export default LatestMovieReviewsContainer
