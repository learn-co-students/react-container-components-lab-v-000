import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'fd55e4f22960412fb09b2b8c889c184c'
const url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }  

  handleSubmit = (event) => {
    event.preventDefault();

    this.searchReviews();
  }

  searchReviews = () => {
    fetch(url + this.state.searchTerm)
    .then(resp => resp.json())
    .then(json => this.setState({...this.state, reviews: json.results}))
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      searchTerm: event.target.value
    })
  }
  
  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="search" onChange={this.handleChange} />
          <input type="submit" value="Search" />
        </form>
        <MovieReviews reviews={this.state.reviews} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}