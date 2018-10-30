import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends React.Component {
  state = {
    reviews: [],
    searchTerm: ''
  }
  fetchMovies = (search) => {
    fetch(URL + search)
    .then(response => response.json())
    .then(response => this.setState({reviews: response.results}))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchMovies(this.state.searchTerm)
  }

  updateSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render () {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="textarea" onChange={this.updateSearchTerm}></input>
          <input type="submit"></input>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
