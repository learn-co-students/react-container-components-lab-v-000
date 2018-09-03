import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f0e37c12db1743f58e7c18a287560bef';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

state = {
  reviews: [],
  searchTerm: ''
}

handleChange = e => {
  this.setState({
    searchTerm: e.target.value
  })
}

handleSearch = () => {
  fetch(URL + `${this.state.searchTerm}`)
  .then(res => res.json())
  .then(data => 
    this.setState({
      reviews: data.results
    }))
}

  render() {

    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSearch} onChange={this.handleChange}>
        <input type="text" value={this.state.searchTerm}/>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>

      )
  }
}