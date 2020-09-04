import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "mrp4z3AZS5iPMIhL7GnOCGxeP90m5caK";
const SEARCH_URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=";

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
      reviews: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch(SEARCH_URL + this.state.searchTerm + "&api-key=" + NYT_API_KEY)
      .then((resp) => resp.json())
      .then((resp) =>
        this.setState({
          reviews: resp.results,
        })
      );
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
            name="search-input"
            type="text"
            onChange={this.handleChange}
            placeholder="Search"
          />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
