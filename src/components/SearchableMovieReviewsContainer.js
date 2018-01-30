// Code SearchableMovieReviewsContainer Here
import React from 'react';
import MovieReviews from './MovieReviews';
import 'isomorphic-fetch';
require('es6-promise').polyfill();

const NYT_API_KEY = 'fb6b214e12a3441cb2501b658fd7a6f0';
const searchURL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: null
    }
  }

  handleSubmit(e) {
    this.setState({searchTerm: e.target.value});
    this.searchMovies();
    e.preventDefault();
  }

  searchMovies = () => {
    fetch(searchURL + this.state.searchTerm + '&api-key=' + NYT_API_KEY)
      .then(response => response.json())
      .then(reviews => this.setState({reviews: reviews.results}))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchTerm} />
          <input type="submit" value="Search" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
