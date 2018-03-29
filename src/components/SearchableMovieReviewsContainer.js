import React, { Component } from "react";
import 'isomorphic-fetch';
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
  + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({ searchTerm: e.target.value })

    fetch(URL + e.target.value).then(response => response.json())
      .then(reviews => {
        this.setState({
          reviews: reviews.results
        })
      })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <input onChange={this.handleInputChange} value={this.state.searchTerm} />
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
