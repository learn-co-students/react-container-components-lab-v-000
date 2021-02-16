import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";
import Fetcher from "../utils/Fetcher";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const url = `${URL}&query=${this.state.searchTerm}`;
    Fetcher.fetch(url).then((results) => {
      this.setState({ reviews: results });
    });
  };

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter a Search Term:
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Find reviews" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
