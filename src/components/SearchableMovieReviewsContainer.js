import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'BpDktRgUOzjuVU5FLqXSMm5IZ908pC4L';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

  state = {
    searchTerm: '',
    reviews: []
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Search Movie Reviews</label>
          <input type="text" onChange={this.handleSearchInputChange} />
          <button type="submit">Submit</button>
        </form>
        < MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

  handleSearchInputChange = event => this.setState({ searchTerm: event.target.value });

  handleSubmit = event => {
    event.preventDefault();

    fetch(URL.concat(this.state.searchTerm))
      .then(resp => resp.json())
      .then(data => this.setState({ reviews: data.results }));
  }
}

export default SearchableMovieReviewsContainer;
