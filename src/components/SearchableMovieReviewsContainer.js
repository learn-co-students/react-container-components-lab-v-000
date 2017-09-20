// Code SearchableMovieReviewsContainer Here
import MovieReviews from './MovieReviews'
import React, { Component } from 'react';
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
const KEY = `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component{
  constructor(){
    super();

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  componentWillMount(){
    fetch(URL+ `query=${this.state.searchTerm}` +KEY)
      .then(res => res.json())
      .then((response => this.setState({ reviews: response.results })))
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer