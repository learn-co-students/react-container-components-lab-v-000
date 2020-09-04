import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";
require("es6-promise").polyfill();

const NYT_API_KEY = "mrp4z3AZS5iPMIhL7GnOCGxeP90m5caK";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
    };
  }

  fetchLatestReviews = () => {
    fetch(URL)
      .then((result) => result.json())
      .then((response) => this.setState({ reviews: response.results }));
  };

  componentDidMount = () => {
    this.fetchLatestReviews();
  };

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;
