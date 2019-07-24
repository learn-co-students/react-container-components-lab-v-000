import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '0FDyBwvaPQQTwP5Ue4WOORT5EstZqAZ4';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {

  state = {
    reviews: [],
    searchTerm: '',
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(URL + `&query=${this.state.searchTerm}`)
    .then(response => response.json())
    .then(response => this.setState({ reviews: response.results }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews" >
        <form onSubmit={event => this.handleSubmit(event)}>
          <label htmlFor="username">Enter movie search term: </label>
          <input id="searchTerm" type="text" value={this.state.value} onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }




}

export default SearchableMovieReviewsContainer

// <MovieReviews searchableMovieReviews={this.state.searchableMovieReviews}/>
