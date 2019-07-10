import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'EaX0Za6cqbgldJZRWDchk91zjgkYIGIf';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSubmit = () => {
    fetch(BASE_URL.concat(this.state.searchTerm))
    .then(response => response.json())
    .then(json => this.setState({ reviews: json.results }))
  }

  handleSearchInputChange = event => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={ this.handleSubmit }>
          <label>Search Movie Reviews!</label><br />
          <input
          type="text"
          onChange={ this.handleSearchInputChange }
          />
          <button>Search</button>
        </form>

        {typeof this.state.reviews === 'object' &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
