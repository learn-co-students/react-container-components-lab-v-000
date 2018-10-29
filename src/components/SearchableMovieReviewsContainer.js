import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'b72ba072168f43aba71353700e59be04';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {

  state = {
    searchTerm: '',
    reviews: []
  }

  handleSearchInputChange = event => this.setState({ searchTerm: event.target.value });

  handleSubmit = event => {
    event.preventDefault();

    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(response => response.json())
      .then(movies => this.setState({ reviews: movies.results }));
    }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input id='search-input' type="text" onChange={ this.handleSearchInputChange } />
          <button type="submit">Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
