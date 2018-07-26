// Code SearchableMovieReviewsContainer Here
import React, {Component} from 'react'
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'a8916fba7c494a59bd7d2ad21df3cb33';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSearch = (e) => {
    e.preventDefault()
    fetch(BASE_URL.concat(this.state.searchTerm))
    .then(response => response.json())
    .then(reviews => this.setState({
      reviews: reviews.results
    }))
  }

  handleInputChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSearch}>
          <label>Search for a Review: </label>
          <input id="search-term" type="text" onChange={this.handleInputChange}></input>
          <input type="submit" value="Search"></input>
        </form>
        {this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
