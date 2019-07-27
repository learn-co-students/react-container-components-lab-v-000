import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = ''; // my NYT API key here
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch(URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(data => this.setState({
        reviews: data.results
      }));
  }

  render() {
    return (
      <div className = 'searchable-movie-reviews'>
        <form onSubmit = {this.handleSubmit}>
          <label htmlFor = 'search-input'>Search Movie Reviews:</label><br/>
          <input
            id = 'search-input'
            type = 'text'
            style = {{width: 150}}
            onChange = {this.handleChange}
          /><br/>
          <button type = 'submit'>Submit</button>
        </form>

        {
          typeof this.state.reviews === 'object' &&
          this.state.reviews.length > 0 &&
          <h3>Your Search Results:</h3>
        }

        <MovieReviews reviews = {this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
