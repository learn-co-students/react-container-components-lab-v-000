import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';
require('es6-promise').polyfill();

const NYT_API_KEY = '1c81a06819264e2ca6b1d2cd1a6a24dd';
const SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;


class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state ={
      searchTerm: '',
      reviews: []
    }
  }

  handleInputChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {

  }

  fetchReviews = () => {
    fetch(SEARCH_URL + this.state.searchTerm)
      .then(response => response.json())
      .then(response => this.setState({ reviews: response.results }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleInputChange}/>
          <input type="submit" value="Search"/>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
