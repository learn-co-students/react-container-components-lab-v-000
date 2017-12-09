import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = '08b2e2184b1a4170aaaf8b3f20cb5939';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=${SEARCH_TERM}` ;
const SEARCH_TERM = 'weinstein'

class SearchableMovieReviewsContainer extends React.Component {

  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  componentWillMount() {
    fetch(URL)
      .then(function(response) {
        return response.json()
      })
      .then(function(reviews) {
        this.setState({ reviews: reviews.results, searchTerm: SEARCH_TERM })
      }.bind(this));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
