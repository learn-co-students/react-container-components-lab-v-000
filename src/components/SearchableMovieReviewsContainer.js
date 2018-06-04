import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '79ddb007bb644ae2abb6db2afd9504c4';
const BASE = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleSearchChange = event => {
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch(BASE.concat(this.state.searchTerm))
    .then(resp => resp.json())
    .then(response => this.setState({reviews: response.results}))
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label> Search Movie Reviews  </label>
          <input type="search" onChange={this.handleSearchChange}></input>
          <button>Search</button>
        </form>
        <hr />
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
