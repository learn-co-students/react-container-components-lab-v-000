import React, { Component } from 'react';
import MovieReviews from './MovieReviews';

import 'isomorphic-fetch';

const NYT_API_KEY = '26ecb4626a4149b99a280d526b3910eb';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
             + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: 'shape'
    };
  }

  componentWillMount() {
      fetch(URL+this.state.searchTerm)
        .then(response => response.json())
        .then(reviewsJSON => this.setState({ reviews: reviewsJSON.results }));
    }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }


}

export default SearchableMovieReviewsContainer;
