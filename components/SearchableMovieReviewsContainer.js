import React from 'react'
import {fetch} from 'whatwg-fetch'

const MovieReviews = require('./MovieReviews')

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h2>Search Results:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
