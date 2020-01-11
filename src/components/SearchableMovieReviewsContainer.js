import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchForm from './SearchForm'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    const url = URL + `&query=${this.state.searchTerm}`

    fetch(url)
      .then(r => r.json())
      .then(reviewData => this.setState({ reviews: reviewData.results }))
  }

  handleInputChange = (ev) => {
    ev.persist()
    this.setState({ searchTerm: ev.target.value })
  }

  render() {
    return (
      <div className='searched-reviews'>
        <SearchForm handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} />
        <h1>Returns from Search:</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
