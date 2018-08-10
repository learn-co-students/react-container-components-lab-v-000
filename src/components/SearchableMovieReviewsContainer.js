import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'e3f5ac8ea1ec474daef77c33ec5f07e7';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json'

export default class SearchableMovieReviewsContainer extends React.Component {
  state = {
    reviews: [],
    searchTerm: ''
  }

  handleSubmit = e => {
    e.preventDefault()

    let searchURL = URL
    searchURL += '?api-key=' + NYT_API_KEY + '&query=' + this.state.searchTerm

    fetch(searchURL)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          reviews: data.results
        })
      })
  }

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit} >
          <input 
            type='text' value={this.state.searchTerm}
            onChange={this.handleChange} 
          />
          <button type='submit'>Search Reviews</button>
        </form>

        <hr />

        <div>
          <MovieReviews reviews={this.state.reviews} />
        </div>

        <hr />
      </div>
    )
  }
}
