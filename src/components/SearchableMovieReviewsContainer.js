import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'cab46dd034b54850b2ad0bfb91bfed47';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
           + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }

  handleSearchInputChange = event => this.setState({ searchTerm: event.target.value });

  handleSubmit = event => {
    event.preventDefault();

    fetch(URL.concat(this.state.searchTerm))
      .then(response => response.json())
      .then(response => this.setState({ reviews: response.results }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleSearchInputChange} type="text" />
          <button type="submit">Submit</button>
        </form>
        {this.state.reviews.length > 0 && <h1>Movie Review By Search:</h1>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
