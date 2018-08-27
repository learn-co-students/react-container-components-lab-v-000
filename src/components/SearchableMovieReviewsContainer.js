import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "f98593a095b44546bf4073744b540da0";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${
        this.state.searchTerm
      }?api-key=f98593a095b44546bf4073744b540da0`
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          reviews: response.results
        });
      });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="searchTerm" onChange={this.handleOnChange} />
          <button type="submit">Search Movies</button>
        </form>
        <div className="latest-movie-reviews">
          {this.state.reviews.map((review, index) => {
            if (review.display_title !== null) {
              return <MovieReviews review={review} key={index} />;
            }
          })}
        </div>
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
