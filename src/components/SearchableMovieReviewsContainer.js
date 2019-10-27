import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Y9ijVE84A2SEKajRMtKDQYm4hnguEhvN';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: [],
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(movieData => this.setState({ reviews: movieData.results }))
  }

  render() {
    return (
    <div className="searchable-movie-reviews">
      <MovieReviews reviews={this.state.reviews} />
    </div>
  );
  }
}

export default SearchableMovieReviewsContainer;
