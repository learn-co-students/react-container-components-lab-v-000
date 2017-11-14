// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'cf8a5b5ea0fb477283200fd9c0285309';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleChange = e => this.setState({
    searchTerm: e.target.value
  })

  handleSubmit = e => {
    e.preventDefault()

    fetch(URL + this.state.searchTerm)
      .then(response => response.json)
      .then(response => this.setState({ reviews: response.results }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='input'>Search Movie Reviews</label>
          <input id="input" type="text" onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
