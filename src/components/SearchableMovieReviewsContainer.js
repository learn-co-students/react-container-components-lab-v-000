import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '1a77f877f4ed47f5b43e5b3a7224cca1';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: [],
  };

  handleSearchTermChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(URL + this.state.query)
      .then(response => response.json())
      .then(json => this.setState({
        reviews: json.results,
      }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={ this.handleSubmit }>
          <input
            id='search-input'
            type="text"
            onChange={ this.handleSearchTermChange } />
          <button type="submit">Submit</button>
        </form>

        <h1>Movie Review By Search:</h1>
        <MovieReviews reviews={ this.state.reviews } />
      </div>
    );
  }

}
