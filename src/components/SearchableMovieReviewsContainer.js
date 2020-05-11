import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchMovieReviews from './SearchMovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  fetchMovies = () => {
    fetch(URL + '&query=' + this.state.searchTerm)
    .then(resp => resp.json())
    .then((json) => {
      this.setState({
        reviews: json.results
      })
    })
  }

  handleQueryChange = (event) => {
    event.persist();
    this.setState({
      searchTerm: event.target.value
    });
  }

  handleSearch = (event) => {
    event.preventDefault();
    this.fetchMovies();
  }

  render() {
    return(
      <div>
        <SearchMovieReviews handleSearch={this.handleSearch} handleQueryChange={this.handleQueryChange} searchTerm={this.searchTerm}/>
        <div className="searchable-review-list">
          <MovieReviews reviews={this.state.reviews}/>
        </div>
      </div>
    )
  }

}
