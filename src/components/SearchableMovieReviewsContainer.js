import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'EhUOstEOAP5S73Gd3zrrTQSlbUGPGCBU';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;


class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  }


  handleSearchInputChange = event =>
    this.setState({ searchTerm: event.target.value })


  handleSubmit = event => {
    event.preventDefault();
    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({reviews: res.results}))
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit}>
      <label htmlFor="search-input">Search Movie Reviews: </label>
      <input type="text" id="search-input" style={{ width: 450 }} onChange={this.handleSearchInputChange}/>
      <button type="submit">Submit</button>
      </form><br/><br/>
      {typeof this.state.reviews === 'object' && this.state.reviews.length > 0 && <h2>Movie Review by Search</h2>}
      <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
