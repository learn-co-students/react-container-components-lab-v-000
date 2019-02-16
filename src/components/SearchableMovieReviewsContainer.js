import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'key';

// Code SearchableMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  state = {reviews: [], searchTerm: ''}

  fetchMovies(term){
    const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + term
    + `&api-key=${NYT_API_KEY}`;
    fetch(URL)
    .then(resp => resp.json())
    .then(resp => this.setState({reviews: resp.results}))
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchMovies(this.state.searchTerm)
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>Search a movie:</label>
          <input type='text' value={this.state.searchTerm} onChange={this.handleChange}></input>
          <button type='submit'>Find movie</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}