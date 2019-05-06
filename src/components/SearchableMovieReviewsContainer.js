import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const NYT_API_KEY = 'rvCYWGdUiRDh4K9J4xklROUI2zJEsHFP';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
// https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>

// provide a searchable interface allowing the user to enter a search term and then receive a list of reviews that match the search term(s)

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews:[],
      searchTerm:""
    }
  }


  fetchMovieReviews = (searchTerm) => {
    fetch(URL + `&query=${searchTerm}`)
    .then(response => response.json())
    .then(data => this.setState({reviews: data.results}))
  }

  componentDidMount() {
    this.fetchMovieReviews()
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(URL + `&query=${this.state.searchTerm}`)
    this.fetchMovieReviews(this.state.searchTerm)
  }


  render() {
    console.log(this.state.searchTerm)
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={(event) => this.setState({searchTerm: event.target.value})}
            type="text"
            name="searchTerm"
            value={this.state.searchTerm}>
          </input>
        </form>
        <div style={{ backgroundColor: '#ccc' }}>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>

    )
  }

}

export default SearchableMovieReviewsContainer
