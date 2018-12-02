import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }

  fetchReviews = (searchTerm) => {
    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(data => this.setState({ reviews: data.results }))
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchReviews(this.state.searchTerm);
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={ this.handleSubmit }>
          <input type="text" onChange={ this.handleChange } />
          <input type="submit" />
        </form>
        <MovieReviews reviews={ this.state.reviews } />
      </div>
    )
  }
}
