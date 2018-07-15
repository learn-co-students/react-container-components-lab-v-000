import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  updateInput = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  fetchSearchableReviews = (e) => {
    e.preventDefault()
    fetch(SEARCH_URL.concat(this.state.searchTerm))
    .then(resp => resp.json())
    .then(resp => this.setState({ reviews: resp.results }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h3>Search Reviews</h3>
        <form onSubmit={this.fetchSearchableReviews}>
          <input type="text" onChange={this.updateInput} />
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
