import React from 'react'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'

const SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='

class SearchableMovieReviewsContainer extends React.Component {
  state = {
    reviews: [],
    searchTerm: '',
  }
  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Search here:</label>
          <input onChange={this.handleChange} type="text" value={this.state.searchTerm} />
          <input type="submit" value="Find Reviews" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch(SEARCH_URL + this.state.searchTerm)
      .then(resp => resp.json())
      .then(reviews => {
        return this.setState({ reviews })
      })
  }

  handleChange = e => {
    this.setState({ searchTerm: e.target.value })
  }
}

export default SearchableMovieReviewsContainer
