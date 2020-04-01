import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const QUERY_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
    constructor(){
      super()
  
      this.state = {
        reviews: [],
        searchTerm: ''
      }
    }
  
    handleSearch = event => {
      event.preventDefault()
      fetch(QUERY_URL.concat(this.state.searchTerm))
      .then(response => response.json())
      .then(reviews => this.setState({
        reviews: reviews.results
      }))
    }
  
    handleInputChange = event => {
      this.setState({
        searchTerm: event.target.value
      })
    }
  
    render(){
      return(
        <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSearch}>
        <h4>Search for a Movie Review</h4>
        <input id="search-term" type="text" onChange={this.handleInputChange}></input>
        <input type="submit" value="Search"></input>
        </form>
        {this.state.reviews.length > 0 && <h3>Movie Review by Search:</h3>}
        <MovieReviews reviews={this.state.reviews}/>
        </div>
      )
    }
  }
  export default SearchableMovieReviewsContainer