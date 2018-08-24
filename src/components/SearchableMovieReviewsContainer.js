import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  fetchReviews = (event) => {
    event.preventDefault()
    const path = BASE_URL + this.state.searchTerm
    fetch(path)
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }))
  }

  onTextChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.fetchReviews}>
          <input type="text" onChange={this.onTextChange} />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
