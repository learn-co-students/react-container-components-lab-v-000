import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
      this.handleInput = this.handleInput.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput = event => {
    this.setState({
    searchTerm: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let url = URL + `${this.state.searchTerm}` + `api-key=${NYT_API_KEY}`;
    fetch(url).then(response => response.json()).then(res => this.setState({
       reviews: res.results
    }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>
          Search Terms
            <input id="search-term" type="text" onChange={this.handleInput} />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
          </form>
          <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
