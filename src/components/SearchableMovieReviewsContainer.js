import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'+ `api-key=${NYT_API_KEY}&query=`;


class SearchableMovieReviews extends React.Component{
  constructor(){
    super();

    this.state ={
      searchTerm: '',
      reviews: []
    };
  }

  handleSearchChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    fetch(URL.concat(this.state.searchTerm))
      .then(response => response.json())
      .then(response => this.setState({reviews: response.results}))

  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Search</label>
          <input type="text" onChange = {this.handleSearchChange}></input>
          <button type="submit">Submit</button>
        </form>
        {this.state.reviews.length > 0 && <h2>Movie Reviews By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviews;
