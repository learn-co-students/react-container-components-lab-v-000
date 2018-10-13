import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = `?api-key=f98593a095b44546bf4073744b540da0`
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=`

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
    this.setState({
      ...this.state,
      searchTerm: event.target[0].value
    })
    this.searchReviews();
  }

  searchReviews = () => {
    fetch(URL + this.state.searchTerm + NYT_API_KEY)
    .then(resp => resp.json())
    .then(json => this.setState({...this.state, reviews: json.results}))
  }
  
  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="search" />
          <input type="submit" value="Search" />
        </form>
        <MovieReviews reviews={this.state.reviews} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}