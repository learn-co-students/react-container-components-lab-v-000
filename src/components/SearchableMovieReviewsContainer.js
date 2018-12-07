import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?';

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state ={
      reviews: [],
      searchTerm: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSearch = (event) => {
    event.preventDefault();
    let query = this.state.searchTerm;
    console.log(query);
    fetch(URL + 'mode=no-cors&api-key=' + NYT_API_KEY + '&query=' + query)
    .then(resp => resp.json())
    .then(data => this.setState({reviews: data.results}))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSearch}>
          <input type="text" id="searchVal" value={this.state.searchTerm} onChange={this.handleChange} />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
