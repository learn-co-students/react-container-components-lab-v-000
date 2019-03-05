import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = missing
const search_URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`;


class SearchableMovieReviewsContainer extends Component {

  state = {
    searchTerm: '',
    reviews: []
    };  
  

  handleInputChange = event => this.setState({ searchTerm: event.target.value });

  handleSubmit = event => {
      event.preventDefault();
      fetch(search_URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(response => this.setState({ reviews: response.results }))
  };
  

  render() {
    return (
      <section className="searchable-movie-reviews">
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="search-input"> Search for Movie Reviews </label>
            <input 
              id="search-input"
              type="text"
              style={{ width: 300 }}
              onChange={ this.handleInputChange } />
            <button type="submit">Submit</button>
        </form>
          { this.state.reviews.length > 0 && <h2>Movie Reviews Results:</h2> }
          <MovieReviews reviews={ this.state.reviews } />
      </section>
      );
  }; 
}

export default SearchableMovieReviewsContainer
