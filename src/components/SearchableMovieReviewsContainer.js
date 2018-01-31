import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleChange = (e) => this.setState({ searchTerm: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchReviews();
  }

  fetchReviews = () => {
    fetch(URL + `${this.state.searchTerm}`)
        .then(res => res.json())
        .then((reviews => this.setState({ reviews: reviews.results })));
  }

  render() {

    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>
            Find Movie Reviews:
          </label>
          <input id="searchInput" type="text" name="movie" onChange={this.handleChange} />
          <input type="submit" value="Search" />
        </form>
        <div className="movie-reviews">
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
    )
  }

}
