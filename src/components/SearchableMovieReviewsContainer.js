import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = '51OGJcsvTYl5xizG'
 const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super();
    
        this.state = {
          reviews: [],
          searchTerm: ''
        }
      }

    handleSearchInputChange = event =>
      this.setState({ searchTerm: event.target.value }
    )
  
    handleSubmit = event => {
      event.preventDefault();
  
      fetch(URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(res => this.setState({ reviews: res.results }))
    }

    render(){
        return (
       <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Search Movie Reviews</label>
          <input type="text" onChange={this.handleSearchInputChange}/>
          <button type="submit">Submit</button>
        </form>
       
        <h2>Movie Review By Search:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
        )
    }
}