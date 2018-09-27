import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '&api-key=f98593a095b44546bf4073744b540da0'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})} />
          <button type='submit'>Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

  fetchReviews = () => {
    fetch(URL + this.state.searchTerm + NYT_API_KEY)
      .then(response => response.json())
      .then(({ results }) => this.setState({ results }))
  }

  handleSubmit = event => {
    event.preventDefault()
    this.fetchReviews()
  }

}
