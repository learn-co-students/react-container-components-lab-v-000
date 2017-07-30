import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      reviews: []
    };
  }

  fetchMovies = () => {
    var URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                + `api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`;
    fetch(URL)
      .then(response => response.json())
      .then(json => this.setState({reviews: json.results}))
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchMovies();
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>
            Search
            <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
          </label>
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
