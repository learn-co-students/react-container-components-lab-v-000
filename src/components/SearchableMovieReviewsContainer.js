import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';
import Input from './Input';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}query=`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
  super()
  this.state = {
    reviews: [],
    searchTerm: ''
  }
}

handleInputChange(e){
  this.setState({searchTerm: e.target.value});
}


handleSubmit(e){
  e.preventDefault();
    fetch(URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
}


    render(){
    return (
      <div className="searchable-movie-reviews">
        <Input handleSubmit={this.handleSubmit} handleChange={this.handleInputChange}/>
        <MovieReviews reviews={this.state.reviews}/>
      </div>)
  }
}


export default SearchableMovieReviewsContainer 