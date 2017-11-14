import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'cf8a5b5ea0fb477283200fd9c0285309';
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

  componentWillMount() {
    fetch(URL)
      .then(response => response.json())
      .then((response => this.setState({ reviews: response.results })))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h3>Latest Movie Reviews:</h3>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
export default LatestMovieReviewsContainer;
