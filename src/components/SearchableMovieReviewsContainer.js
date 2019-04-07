import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "ZFSaaGRuUIivUjVQyiD47vAIQmGgLKAQ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}&query=`;

// https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=lebowski&api-key=ZFSaaGRuUIivUjVQyiD47vAIQmGgLKAQ

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  handleSearch = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(URL.concat(this.state.searchTerm))
      .then(response => response.json())
      .then(response => this.setState({ reviews: response.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <strong>Search for a Movie:</strong>
          <br />
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={event => this.handleSearch(event)}
          />
          <br />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
