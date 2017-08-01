// Code SearchableMovieReviewsContainer Here
import React from 'react';
import MovieReviews from './MovieReviews';
import 'isomorphic-fetch';

const NYT_API_KEY = 'ecc15eedfe6a4e02bfcaaa62d3870e07';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: "",
    }

  this.handleSearch = this.handleSearch.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit(e) {
  e.preventDefault();
  fetch(BASE_URL.concat(this.state.searchTerm))
    .then(res => res.json())
    .then(res => this.setState({ reviews: res.results }));
    debugger;
}

  render() {
    return(
      <div className="searchable-movie-reviews">
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleSearch} />
            <button type="submit">Submit</button>
          </form>
          <MovieReviews reviews={this.state.reviews} />
        </div>
    )
  }
}

export default SearchableMovieReviewsContainer
