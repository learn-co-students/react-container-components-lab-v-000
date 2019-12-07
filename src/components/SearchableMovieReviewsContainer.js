import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

  export default class SearchableMovieReviewsContainer extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        reviews: [],
        searchTerm: ""
      };
    }

    searchInput = e => this.setState({ searchTerm: e.target.value });

    onSubmit = e => {
      e.preventDefault();

      fetch(URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(res => this.setState({ reviews: res.results }));
    }

    render() {
      return(
        <div className="searchable-movie-reviews">
            <form onSubmit={this.onSubmit}>
            <label htmlFor="search-input">Search Movie Reviews</label>
            <input
              id="search-input"
              type="text"
              style={{ width: 300 }}
              onChange={this.searchInput}
            />
            <button type="submit">Submit</button>
          </form>
          {typeof this.state.reviews === 'object' &&
            this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
          <MovieReviews reviews={this.state.reviews} />
        </div>
      );
    }
  }
