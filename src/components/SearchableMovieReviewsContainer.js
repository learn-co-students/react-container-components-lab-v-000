import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '3xXpsfmy0XPp9Ja5SJi3FuITulycZxqy';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

  class SearchableMovieReviewsContainer extends Component {

    constructor() {
      super()
      this.state = {
      reviews: [],
      searchTerm: ""
  }
    }

    handleSubmit = event => {
    event.preventDefault()
    this.props.fetchMovies(this.state.searchTerm)
  }


  render() {
    return (
      <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit}>
      <input type="text" name="text" />
      <button name="submit">Submit Search</button>
      </form>
      </div>
    )
  }
  }

  export default SearchableMovieReviewsContainer ;
