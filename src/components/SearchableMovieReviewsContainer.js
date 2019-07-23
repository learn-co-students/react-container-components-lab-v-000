import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ZuCtXhJchtq0rObDIRk9CNocmao4kVAA';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.fetchSearchMovies()
  }
  
  handleSearch = e => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  fetchSearchMovies(){
    fetch(BASE_URL.concat(this.state.searchTerm))
       .then(res => res.json())
       .then(movies => this.setState({reviews: movies.results}) )
   }

   render(){
     return(
       <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">Search Movie Reviews: </label>
          <input 
            type="text" 
            name="searchTerm" 
            onChange={this.handleSearch}></input>
          <button type="submit">Submit</button>
        </form>
        {this.state.reviews.map((review, index) => 
          <MovieReviews key={index} display_title={review.display_title} byline={review.byline} summary_short={review.summary_short} headline={review.headline}/>  
        )}
       </div>
     )                                                           
   }
}

export default SearchableMovieReviewsContainer
