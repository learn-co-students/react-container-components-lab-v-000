import React from 'react'
import MovieReviews from './MovieReviews';

const { fetch } = require('whatwg-fetch');

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = { reviews: [], search: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  handleSubmit(ev) {
    ev.preventDefault();
    const key = "api-key=93217d2db55e4260842a3249811ef39d";
    const url = "https://api.nytimes.com/svc/movies/v2/reviews/all.json?";

    fetch(url + `query=${this.state.search}&` + key)
      .then(res => res.json())
      .then(json => this.setState({ reviews: json.results }));
  }
  handleSearchChange(ev) {
    this.setState({search: ev.target.value});
  }
  render() {
    return (
      <div className="searchable-movie-reviews">
        <h1>Movie Review Search</h1>
        <div>
          <form>
            <input type="text" name="search" onChange={this.handleSearchChange} />
            <input type="submit" onClick={this.handleSubmit} value="Search" />
          </form>
        </div>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
