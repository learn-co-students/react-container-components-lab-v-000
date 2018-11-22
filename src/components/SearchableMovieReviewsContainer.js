import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`
            + '&query='

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  getData = searchTerm => {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}`)
    .then(res => res.json())
    .then(data => this.setState({ reviews: data.results }))
  }

  handleChange = e => {
    this.setState({ query: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.getData(this.state.searchTerm)
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>
            Search Keyword:
            <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}