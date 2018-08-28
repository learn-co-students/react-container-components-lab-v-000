import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      searchTerm: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.fetchMovies(this.state.searchTerm);
  }

  fetchMovies = searchTerm => {
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then(response => response.json())
      .then(movies => this.setState({
        ...this.state,
        reviews: movies.results
      }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter a specific movie query here:
            <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
          </label>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewContainer
