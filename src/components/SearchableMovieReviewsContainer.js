// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'd4d4a7f495ca435aa447f0c3f7243a50';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      reviews: []
    };
  }

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch(URL + this.state.searchTerm)
      .then(response => response.json())
      .then(res => this.setState({ reviews: res.results }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='search-input'>Search Movie Reviews </label>
          <input
            id="search-input"
            type="text"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        {this.state.reviews.length > 0 &&
          <h1>Searched Movie Reviews:</h1>
        }
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
