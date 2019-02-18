import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'WQAVG3Gew2YeaYsEiGX5DHon87GcQGsw';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = { reviews: [] }
  }

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => this.setState({ reviews: data.results }))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h4>Latest Movie Reviews</h4>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}