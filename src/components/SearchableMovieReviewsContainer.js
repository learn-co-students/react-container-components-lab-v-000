import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'EEYQ8MPQrsMfbYXAML1Fo4yyjbSxdIvl';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={ this.state.reviews } searchTerm={ this.state.searchTerm } />
      </div>)
  }
}

export default SearchableMovieReviewsContainer;