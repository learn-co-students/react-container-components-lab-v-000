// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = this.state.searchTerm;
    const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&query=${searchTerm}`;

    fetch(URL)
      .then(res => res.json())
      .then(reviews => this.setState({ reviews: reviews.results }))
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h3>Search Move Reviews</h3>
        <form onSubmit={this.handleSubmit }>
          <input type="text" name="searchTerm" onChange={this.handleChange} value={this.state.searchTerm} />
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
