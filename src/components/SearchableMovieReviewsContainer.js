import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = '';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>?'
            + `api-key=${NYT_API_KEY}`;

// provide a searchable interface allowing the user to enter a search term
// and then receive a list of reviews that match the search term(s).
// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchTerm: '',
      reviews: []
    };
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h2>Searchable Reviews:</h2>
        <MovieReviews reviews = {this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer
