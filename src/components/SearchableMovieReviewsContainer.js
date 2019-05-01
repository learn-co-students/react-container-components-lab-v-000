import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '5ypc6iZGL6VfDdNcaoxdxNlAUvCoQnKU';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      reviews: []
    }
  }

  handleResponse(data) {
    this.setState({
      reviews: data.results
    })
  }

  handleSearch(event) {
    event.preventDefault();
    let url = URL + "&query=" + this.state.searchTerm;
    fetch(url).then(res => res.json()).then(data => this.handleResponse(data))

  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={event => this.handleSearch(event)}>
          <input onChange={this.handleChange} type="text" name="searchTerm" value={this.state.searchTerm}></input>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
