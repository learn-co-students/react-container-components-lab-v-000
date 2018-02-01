import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleInputChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  handleSearchSubmit = event => {
    event.preventDefault();
    fetch(URL + this.state.searchTerm).then(response => response.json()).then(response => this.setState({ reviews: response.results }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h2>Searchable Movie Reviews</h2>
        <form onSubmit={this.handleSearchSubmit}>
          <input type="text" value={this.state.searchTerm} name="search-term" onChange={this.handleInputChange}></input>
          <input type="submit" value="Search"></input>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
