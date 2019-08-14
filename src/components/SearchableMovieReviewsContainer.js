import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'OCJ5gxjUtQL5FNEsp34GTA04LrKgWvQM';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  render() {
    return (
      <div>
        <MovieReviews />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;