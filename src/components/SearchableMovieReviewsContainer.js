import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      reviews: [],
    }
  }

  handleSearchTerm = e => {
    this.setState({ searchTerm: e.target.value})
  }

  handleOnSubmit = e => {
    e.preventDefault();

    fetch(URL + `search=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(resp => this.setState({ reviews: resp.results}))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={this.handleSearchTerm} />
          <button type="submit">Submit</button>
        </form>

        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}
