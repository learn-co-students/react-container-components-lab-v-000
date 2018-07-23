// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react'

import MovieReviews from './MovieReviews.js'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = (searchTerm) => {
  return `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${searchTerm}`
}


class SearchableMovieReviewsContainer extends Component{
  constructor() {
    super();
    this.state = { reviews: [], searchTerm: "" }
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  handleSearch = (event) => {
    event.preventDefault();
    const url = URL(this.state.searchTerm)
    fetch(url)
      .then(response => response.json())
      .then(reviews => this.setState({ reviews: reviews.results }));
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <h2>Search NYT Reviews</h2>
        <input name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} />
        <button type="submit" onClick={this.handleSearch}>Search</button>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
