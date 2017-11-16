import React, { Component } from 'react';
import MovieReviews from './MovieReviews';
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleOnChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch(URL + '&query=' + this.state.searchTerm)
      .then(resp => resp.json())
      .then(reviewsJSON => this.setState({reviews: reviewsJSON.results}))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleOnChange}
          />
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} listDescription="Search Results" />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
