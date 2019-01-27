import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL =`https://api.nytimes.com/svc/movies/v2/reviews/search.json?`
            + `api-key=${NYT_API_KEY}&query=`;
;

// Code SearchableMovieReviewsContainer Here


export default class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super();

    this.state = {
      reviews:[],
      searchTerm:""
    }
  }

  handleSubmit= event => {
    event.preventDefault();

    fetch(URL.concat(this.state.searchTerm))
    .then(response => response.json())
    .then(reviews => this.setState({reviews: response.results}));
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit}>
          <label htmlFor="input">Search for Movie Reviews</label>
          <input id="input" type="text" onChange={this.handleSearchChange}/>
          <button type="submit">Submit</button>
      </form>
       <MovieReviews reviews={ this.state.reviews } />
      </div>
    )
  }
}
