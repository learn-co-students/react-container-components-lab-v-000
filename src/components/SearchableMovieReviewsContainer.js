import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  // handleClick = () => {
  //
  // }

  handleSubmit = event => {
    event.preventDefault()
    this.handleFetch(this.state.searchTerm)
  }


  handleFetch = () => {
    fetch(URL)
    .then(response => response.json())
    .then(response => this.setState({ reviews: response.results }))
   }

  render() {
    return (
      <div
        className = "searchable-movie-reviews"
        onSubmit={this.handleFetch}>{this.state.searchTerm}>
        <MovieReviews reviews= {this.state.reviews}/>
        <form onSubmit= {this.handleSubmit}>
          <input
            placeholder="Enter a Search Term"
            type="text"
            value={this.state.searchTerm}
            onChange={event => this.setState({searchTerm: event.target.value})} />
          <input type="Submit" />
        </form>
      </div>


   )
  }
}

export default SearchableMovieReviewsContainer
