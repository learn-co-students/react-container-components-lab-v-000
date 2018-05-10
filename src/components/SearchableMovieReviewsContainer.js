
import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super();

    this.state = {
      searchTerm: '',
      reviews: []
    };
  }

  searchInput = event => this.setState({ searchTerm: event.target.value });

  submit = event => {
    event.preventDefault();

    fetch(URL + this.state.searchTerm)
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.submit}>
          <label htmlFor='search-input'>Search Movie Reviews</label>
          <input type="text" onChange={this.searchInput} />
          <button type="submit">Submit</button>
        </form>
        {this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}


export default SearchableMovieReviewsContainer;
