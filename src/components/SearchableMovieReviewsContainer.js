import React, { Component } from 'react'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ''
  }

  handleChange = event =>  {
    this.setState({searchTerm: event.target.value})
  }

  fetchSearch = e => {
    e.preventDefault()
    const searchTerm = this.state.searchTerm
    const NYT_API_KEY = 'OCJ5gxjUtQL5FNEsp34GTA04LrKgWvQM'
    const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                + `query=${searchTerm}`
                + `&api-key=${NYT_API_KEY}`
    fetch(URL)
    .then(res => res.json())
    .then((data) => { 
      this.setState({ reviews: data.results })
    })
  }

  render() {
    return (
      <form className="searchable-movie-reviews" onSubmit={this.fetchSearch}>
        <label>
          Movie Title:
          <input type="text" value={this.state.searchTerm} onChange={event => this.handleChange(event) }/>
          <MovieReviews reviews={this.state.reviews} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default SearchableMovieReviewsContainer