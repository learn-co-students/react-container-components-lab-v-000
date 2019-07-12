import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '3xXpsfmy0XPp9Ja5SJi3FuITulycZxqy';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`;

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
    fetch(URL + this.state.searchTerm)
    .then(res => res.json())
    .then(data => this.setState({
      reviews: data.results
    }))
  }

  handleSearchInputChange = event =>
    this.setState({ searchTerm: event.target.value });




  render() {

    return (
      <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit}>
      <input type="text" name="text" onChange={this.handleSearchInputChange} />
      <button name="submit">Submit Search</button>
      </form>
        <div>

          <MovieReviews reviews={this.state.reviews} />

        </div>
      </div>

    )
  }
  }

  export default SearchableMovieReviewsContainer ;
