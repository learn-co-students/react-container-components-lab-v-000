// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import MovieReviews from './MovieReviews.js'
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code LatestMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      reviews: [],
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleUpdateInput = this.handleUpdateInput.bind(this)
  }

  handleFormSubmit(event) {
    event.preventDefault();
    fetch(URL + this.state.searchTerm)
      .then(res => res.json())
      .then(res => this.setState({reviews: res.results}))
  }

  handleUpdateInput(event) {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" value={this.state.searchTerm} onChange={this.handleUpdateInput}/>
          <button>Search</button>
        </form>
        <h1>Search Results:</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
