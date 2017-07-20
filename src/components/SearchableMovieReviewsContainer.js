import React from 'react';
import { Component } from 'react';

import SearchInput from './SearchInput';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {searchTerm: '', reviews: []}

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSearchInputChange(e) {
    this.setState({ searchTerm: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <SearchInput
          handleSubmit={this.handleSubmit}
          handleChange={this.handleSearchInputChange}/>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
