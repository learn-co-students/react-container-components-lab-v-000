import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends React.Component {

  constructor() {
    super();

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  getReviews = () => {
    fetch(URL + `&query=${this.state.searchTerm}`)
     .then(response => response.json())
     .then(response => this.setState({reviews: response.results})
     )
  }

  handleSearch = event => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  handleSubmit = event => {
    this.getReviews();
    event.preventDefault();
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleSearch}/>
          <input type="submit" value="Search"/>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
