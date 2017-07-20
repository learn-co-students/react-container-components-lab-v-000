import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '090c7705332340c691e927aeb9ce6cbc';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
  + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor () {
    super()
    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch(URL + this.state.searchTerm)
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }))
  }

  render () {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='input'>Search for a Movie: </label><br />
          <input id='input' type="text" onChange={this.handleChange} />
          <button type='submit'>Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
