import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'A053gIUuCtdU5c9bTVceP7lNZyrcgmTu';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleChange = event => {
    this.setState({ searchTerm: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch(URL.concat(this.state.searchTerm))
      .then(response => response.json())
      .then(reviewData => this.setState({ reviews: reviewData.results }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}></input><br />
          <input type="submit"></input>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}