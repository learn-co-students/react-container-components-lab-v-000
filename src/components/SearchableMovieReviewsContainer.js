// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
const API_KEY = 'ba7a8806dfc54269998992a8a9c50375';

class SearchableMovieReviewsContainer extends React.Component {

  constructor() {
    super();
 
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
       <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer