import React, { Component } from 'react'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = process.env.REACT_APP_NYT_MOVIES_API_KEY
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`
class SearchableMovieReviewsContainer extends Component {

  state = {
    searchTerm: "",
    reviews: []
  }

  handleSearchInputCollection =  event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.fetchMovies()
  }

  fetchMovies = () => {
    fetch(BASE_URL.concat(this.state.searchTerm))
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server")
      }
      return response.json()
      })
      .then(reviews => this.setState({ reviews: reviews.results }))
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={ (event) => this.handleSubmit(event)}>
          <input type="text" value={this.state.searchTerm} onChange={this.handleSearchInputCollection}/>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
