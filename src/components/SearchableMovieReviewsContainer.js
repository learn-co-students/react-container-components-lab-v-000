import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;
const SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
+ `api-key=${NYT_API_KEY}`
+ '&query='

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ''
  }


  handleChange = (event) => {
    this.setState({
      ...this.state.reviews,
      searchTerm: event.target.value
    })
  }

  fetchAndStoreReviews = (event) => {
    //because this event handler is arrow function, passing of event is implied
    //so don't need arrow function wrapper below
    //only for events, not for passing in props
    //need to pass in event so can preventDefault
    event.preventDefault()
    fetch(SEARCH_URL + this.state.searchTerm)
    .then(response => response.json())
    .then(json => {
      this.setState({
        reviews: json.results,
        ...this.state.searchTerm
      })
    })

  }

  render(){
    return (
      <div className="searchable-movie-reviews">
      <form
      onSubmit={this.fetchAndStoreReviews}
      >
        <input
          onChange={this.handleChange}
          value={this.state.searchTerm}
        />
        </ form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
