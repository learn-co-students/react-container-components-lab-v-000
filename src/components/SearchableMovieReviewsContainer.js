import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'YGLkjirUKg68ZLAbGaX8XkeU7AOGqQEc';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
  + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }


  handleTextChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setSearch(this.state.searchTerm)
  }

  setSearch = (term) => {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${term}&api-key=${NYT_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          reviews: data.results
        })
      })
  }


  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={event => this.handleSubmit(event)}>
          <div>
            <label>
              Review Search
              <input id="search" name="search" type="text" onChange={event => this.handleTextChange(event)} value={this.state.searchTerm} />
            </label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer