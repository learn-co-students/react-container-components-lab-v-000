import React from 'react';
import fetch from 'whatwg-fetch';
import SearchInput from './SearchInput';
import MovieReviews from './MovieReviews';

const API_KEY = '9a8b412cf4fc4eb3b4f3cc9655215518'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${API_KEY}&query=`;
export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      reviews: []
    };

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchInputChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <SearchInput
          handleSubmit={this.handleSubmit}
          handleChange={this.handleSearchInputChange}/>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
