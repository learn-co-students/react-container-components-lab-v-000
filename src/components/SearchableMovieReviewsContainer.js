// Code SearchableMovieReviewsContainer
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchBar from './SearchBar'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      reviews: [],
      searchTerm: '',
    }
  }

  handleFormSubmit = (e)=>{
    e.preventDefault()
    fetch(URL.concat(this.state.searchText))
      .then(resp => resp.json())
      .then(json => this.setState((prevState, props)=>({
        reviews: json.results,
      })))
  }

  handleTextChange = (e)=>{
    this.setState((prevState, props)=>({
      searchTerm: e.target.value,
    }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <SearchBar handleFormSubmit={this.handleFormSubmit} handleTextChange={this.handleTextChange}/>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    );
  }
}
