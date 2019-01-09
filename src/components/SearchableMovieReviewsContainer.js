import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = process.env.REACT_APP_API_KEY;
const URLBase = ' https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

  constructor () {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleChange = (event) => {
    this.setState({
       [event.target.name]: event.target.value
     })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`${URLBase}${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
    .then(response => response.json())
    .then(JSON => {
      this.setState({
        reviews: JSON.results
      })
    });

  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <div className="searchForm">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} />
            <button>Search Reviews</button>
          </form>
        </div>
        <div className="searchResults">
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
    )
  }


}
