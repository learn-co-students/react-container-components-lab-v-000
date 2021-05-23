import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'oo6HVAlan2IyLGNDqon1MO4tMKDUhJfE';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMoveReviewsContainer extends Component{
  constructor(){
    super()
    this.state = {
      searchTerm: "",
      reviews: []
    }
  }

  handleSearch = (event) => this.setState({ search: event.target.value })
  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(response => response.json())
      .then(data => this.setState({ reviews: data.results }))
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">Search Movie Reviews</label>
          <input type="text" onChange={this.handleSearch} value={this.state.searchTerm}/>
          <button>Search</button>
        </form>
        {typeof this.state.reviews === "object" && this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMoveReviewsContainer
