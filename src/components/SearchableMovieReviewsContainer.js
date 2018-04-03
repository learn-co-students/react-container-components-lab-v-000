// Container Component //
import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSearchInput = e => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    fetch((URL + this.state.searchTerm))
      .then(response => response.json())
      .then(reviews => this.setState({ reviews: reviews.results }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">

        <form onSubmit={this.handleSubmit}>
          <label>Search Movie Reviews: </label>
          <input
            type="text"
            onChange={this.handleSearchInput}
          />
          <button type="submit">Submit</button>
        </form>

        {this.state.reviews.length > 0 && <h2>Reviews Containing Search Term: {this.state.searchTerm}</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
