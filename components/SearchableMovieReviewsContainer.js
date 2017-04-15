const React = require('react');
const { Component } = require('react');
const { fetch } = require('whatwg-fetch');

const MovieReviews = require('./MovieReviews');
const SearchField = require('./SearchField');

const NYT_API_KEY = '7ac5dfd6aeaf4bab8edb840c84b87e23';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      search: '',
      reviews: []
    }
  }

  handleChange(ev) {
    const search = ev.target.value;
    this.setState({ search });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    fetch(URL.concat(this.state.search))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <SearchField
          handleSubmit={this.handleSubmit}
          handleChange={this.handleSearchInputChange} />
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

module.exports = SearchableMovieReviewsContainer;