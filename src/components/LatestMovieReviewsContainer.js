import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '3GBSfA5H5IcXvc3W2artipEtTdBl4AAc';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [] }
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
        .then(movies => {
          this.setState({ reviews: movies.results })
        })
    }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h3>The Latest Movie Reviews</h3>
          <ol>
            <MovieReviews reviews={ this.state.reviews } />
          </ol>
      </div>
    )
  }
}
