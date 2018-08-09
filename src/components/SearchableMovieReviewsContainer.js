import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '4fd66781b8fc4e7c84bf53f83db9aded';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`;


class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleSearchChange = event => this.setState({searchTerm: event.target.value})

  fetchData = event => {
    event.preventDefault()

    fetch(URL + this.state.searchTerm)
      .then(response => response.json())
      .then(json => this.setState({reviews: json.results}))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.fetchData}>
        <input onChange={this.handleSearchChange} id="search-text" type="text"></input>
          <input type="submit"></input>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>


    )
  }
}

export default SearchableMovieReviewsContainer
