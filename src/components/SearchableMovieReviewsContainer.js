import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '4Z9hrsWVzDkrL07jdPcfsA9aoB8Kh620';
const URL = (searchTerm) => `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}`
            + `&api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  fetchReviews = (event) => {
    event.preventDefault();
    fetch(URL(this.state.searchTerm))
      .then(response => response.json())
      .then(data => this.setState({ reviews: data.results }))
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <h1>Searchable Movie Reviews</h1>
        <form onSubmit={this.fetchReviews}>
          <label htmlFor="search-movies">Search Movies: </label>
          <input id="search-movies" type="text" value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})}></input>
          <button type="submit">Search!</button>
        </form>

        <p></p>

        <MovieReviews reviews={ this.state.reviews } />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
