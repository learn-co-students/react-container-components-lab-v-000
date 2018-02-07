import React, { Component } from 'react'
import 'isomorphic-fetch'

import MovieReviews from './MovieReviews'

const NYT_API_KEY = '1e7dbeed944c47968668bf6b65030e0e';
const NYT_API_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSearchInputChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    fetch(NYT_API_URL + this.state.searchTerm)
      .then( resp => resp.json() )
      .then( respJson => this.setState({ reviews: respJson.results }) )
      .catch( error => console.error(error) )
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" placeholder="Search" onChange={this.handleSearchInputChange}></input>
          <button type="submit">Search</button>
        </form>
        <br />
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
