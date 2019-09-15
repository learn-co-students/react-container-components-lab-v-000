import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
    constructor() {
      super()
   
      this.state = {
        reviews: [], 
        searchTerm: "", 
      };
    }
   
    handleSubmit() {
      fetch(URL)
        .then(response => response.json())
        .then(reviews => this.setState({ reviews }))
    }
   
    render() {
      return (
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
        <button onSubmit={this.handleSubmit}>Search</button>
      </div>
      )
    }
  }

  export default SearchableMovieReviewsContainer;