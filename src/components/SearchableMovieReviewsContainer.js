import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY;
// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: '',
    reviews: []
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(response => response.json())
      // .then(response => console.log('fetched-search: ', response));
      .then(response => this.setState({ reviews: response.results }));
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">Search Movie Reviews</label>
          <input
            type="text"
            id="search-input"
            style={{ width: 300 }}
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <input type="submit" />
          {/* <button type="submit">Submit</button> */}
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
