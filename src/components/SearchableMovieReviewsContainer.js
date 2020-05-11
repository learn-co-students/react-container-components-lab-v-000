import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
const API_KEY_URL = `&api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleChange = event => this.setState({ searchTerm: event.target.value })

  handleSubmit = () => {
    fetch(URL + this.state.searchTerm + API_KEY_URL)
    .then(response => response.json())
    .then(searchData => this.setState({ reviews: searchData.results }))
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <label>Search Movie Reviews: </label>
          <input type='text' value={this.state.value} onChange={this.handleChange}/>
          <input type='submit' value='Submit'/>
        </form>

        <h2>Movie Review By Search:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
