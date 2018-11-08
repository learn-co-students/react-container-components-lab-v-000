import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'e27dad6a5e384051acd31ddea76db76b';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews:[]
    }
  }

  componentDidMount() {
    fetch(URL).then(resp => resp.json()).then(moviesJSON => this.setState({
      reviews: moviesJSON.results
    }))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
