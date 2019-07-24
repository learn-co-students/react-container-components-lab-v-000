import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
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