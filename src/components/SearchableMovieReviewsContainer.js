import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'R6FD3DFnKvPYMVYyVgIOcEewVbT4ArnR';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
   constructor() {
    super()
      
      this.state = {
        reviews: [], 
        searchTerm: ''
      }
    }
    
    handleSearchInputChange = event => this.setState({ searchTerm: event.target.value })
    
    handleSubmit = event => {
      event.preventDefault();
      
      fetch(URL + this.state.searchTerm)
        .then(response => response.json())
          .then(response => this.setState({ reviews: response.results}))
    }
    
    render() {
      return (
        <div className="searchable-movie-reviews">
        
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleSearchInputChange} />
            <button type="submit">Submit</button>
          </form>
          <MovieReviews reviews={this.state.reviews}/>
          </div>
        )
    }
  
}

export default SearchableMovieReviewsContainer
