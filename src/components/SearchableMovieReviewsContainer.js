import React, { Component } from 'react';
import MovieReviews from './MovieReviews';
import 'isomorphic-fetch';

const nytApiKey = 'f7b60cef5c874da99523cccd2a22c133';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${nytApiKey}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

      this.state = {
        searchTerm: '',
        reviews: []
      };
  }

  handleSearch = event => this.setState ({ 
    searchTerm: event.target.value 
  });

  handleSubmit = event => {
    event.preventDefault();

    fetch(URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({reviews: res.results}));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          Search NYT Movie Reviews: 
          <input
            id='search-input'
            type="text"
            onChange={this.handleSearch} />
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}


export default SearchableMovieReviewsContainer; 