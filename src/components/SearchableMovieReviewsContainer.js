import "isomorphic-fetch";
import React, { Component } from "react";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "x7gkgJ0gEG2bA9JDsqzpP8IDu0N5Idx0";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

export default class extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(response => response.json())
      .then(({ results }) => {
        this.setState({ reviews: results });
      });
  };

  render() {
    const { reviews, searchTerm } = this.state;
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="searchTerm"
            value={searchTerm}
            onChange={this.handleChange}
          />
        </form>
        <MovieReviews reviews={reviews} />
      </div>
    );
  }
}
