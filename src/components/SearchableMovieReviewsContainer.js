import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "f98593a095b44546bf4073744b540da0";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      reviews: []
    };
  }

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const term = URL + `&query=${this.state.search}`;
    fetch(term)
      .then(response => response.json())
      .then(myJson => {
        this.setState({
          reviews: myJson.results
        });
      });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label> Search</label>
          <input onChange={this.handleChange} type="text" />
          <input type="submit" />
        </form>
        {this.state.reviews.map(movie => (
          <MovieReviews searchedMovie={movie} />
        ))}
      </div>
    );
  }
}
