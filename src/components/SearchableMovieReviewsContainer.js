import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "G2jA527kvXcoRx529IaBKA5gAsnEqcNT";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}+query=`;

class SearchableMovieReviewsContainer extends Component {
  state = { reviews: [], searchTerm: "" };

  inputHandler = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(URL.concat(this.state.searchTerm))
      .then(response => response.json())
      .then(data => this.setState({ reviews: data.results }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search Movie Reviews</label>
          <input type="text" onChange={this.inputHandler} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default SearchableMovieReviewsContainer;
