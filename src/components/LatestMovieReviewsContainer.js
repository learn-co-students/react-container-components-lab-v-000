import "isomorphic-fetch";
import React, { Component } from "react";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "x7gkgJ0gEG2bA9JDsqzpP8IDu0N5Idx0";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

export default class extends Component {
  state = {
    reviews: []
  };

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(({ results }) => {
        this.setState({ reviews: results });
      });
  }

  render() {
    const { reviews } = this.state;
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={reviews} />
      </div>
    );
  }
}
