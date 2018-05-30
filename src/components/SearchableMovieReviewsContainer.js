import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`;


export default class SearchableMovieReviewsContainer extends React.Component{
  constructor(){
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  };

  handleClick = () => {
    console.log(this.state.searchTerm);
    fetch(URL.concat(this.state.searchTerm))
      .then(rsp => rsp.json())
      .then(rsp => this.setState({reviews: rsp.results}))
      .then(console.log(this.state))

  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <input value={this.state.value} onChange={this.handleChange} id="search-bar" type="text" />
        <button onClick={this.handleClick}>Search</button>
        {this.state.reviews.length>0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
