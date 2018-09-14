import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

const NYT_API_KEY = '0e3bdfeff2f442e98fb03f733c799a22';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(`${URL}`)
      .then(response => response.json())
      .then( ({results}) => {
        this.setState({reviews: results})
      })
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>The Latest Reviews</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
