// Code SearchableMovieReviewsContainer Here
import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';
import InputSearch from './InputSearch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(URL+this.state.searchTerm)
      .then(response => response.json())
      .then(response => this.setState({ reviews: response.results }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h3>Search for Movie Reviews</h3>
        <InputSearch handleChange={this.handleChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)} />
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}
