import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '52zBaU3QH34r237SSKOnFXLK2aph9xRE';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch(URL)
      .then(response => response.json())
      .then(reviews => this.setState({
        reviews: reviews.results,
      })
    )
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Search: </label>
          <input type="text" onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
