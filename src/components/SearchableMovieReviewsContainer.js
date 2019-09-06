import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const MY_API_KEY = "Xrmcla6YMZijaIMOEF2l3aJaYeFu3uGo";
const URL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" + `api-key=${MY_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    let endpoint = `${URL}&query=${this.state.searchTerm}`;
    console.log(endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(reviews => this.setState({ reviews: reviews.results }));
  };

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        <MovieReviews className="searchable-movie-reviews" reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
