const React = require('react');
const { Component } = require('react');
const { fetch } = require('whatwg-fetch');
const SearchInput = require('./SearchInput');

const MovieReviews = require('./MovieReviews');

// URL for searching the api
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=fda304e4de3646db8988f9decac69e30&query=';

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      reviews: []
    };

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSearchInputChange is sent to SearchInput and saves
  // the search term.
  handleSearchInputChange(ev) {
    this.setState({ searchTerm: ev.target.value });
  }

  // handleSubmit is sent to the SearchInput and fetches results
  // from the API on submit.
  handleSubmit(ev) {
    ev.preventDefault();
    fetch(BASE_URL.concat(this.state.searchTerm)).then(res => res.json()).then(res => this.setState({ reviews: res.results }));
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

module.exports = SearchableMovieReviewsContainer;