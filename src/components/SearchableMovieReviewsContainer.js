import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';
const API_KEY = `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  state = {
    searchTerm: '',
    reviews: []
  }

  handleSearchInputChange = event => {
    this.setState({ searchTerm: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();

    fetch(URL.concat(this.state.searchTerm).concat(API_KEY))
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviews: data.results
        })
      })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
            id="search-input"
            type="text"
            onChange={this.handleSearchInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }


}

export default SearchableMovieReviewsContainer
