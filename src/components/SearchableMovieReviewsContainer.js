import React, { Component } from 'react'
import 'isomorphic-fetch'

import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
            `api-key=${NYT_API_KEY}&query=`

export default class SearchableMovieReviewsContainer extends Component {
  constructor () {
    super()

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleChange = event => this.setState({ searchTerm: event.target.value })

  handleSubmit = event => {
    event.preventDefault()

    fetch(URL + this.state.searchTerm)
      .then(res => res.json())
      .then(reviews => this.setState({ reviews: reviews.results }))
  }

  render () {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
        <input
            type='text'
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
