import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'b4f7834090da474abcc4b46d76d7fdc8';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm:'',
      reviews: []
    };
  }

  handleSearchInputChange = event => this.setState({ searchTerm: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(URL.concat(this.state.SearchTerm))
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='search-input'>Search Movie Reviews</label>

          <input
            id='search-input'
            type="text"

            onChange={this.handleSearchInputChange} />
          <button type="submit">Submit</button>
        </form>
        {this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}


export default SearchableMovieReviewsContainer;