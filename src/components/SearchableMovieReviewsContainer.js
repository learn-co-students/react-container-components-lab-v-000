// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
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

  handleSearchTermChange = (event) => {
    this.setState({searchTerm: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${URL}${this.state.searchTerm}`)
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }))
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <label>Search Reviews</label>
          <input type='text'     onChange={this.handleSearchTermChange} />
          <input type='submit' />
        </form>
        <h2>Search Results:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }


}

export default SearchableMovieReviewsContainer;
