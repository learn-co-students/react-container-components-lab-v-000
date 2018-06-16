import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

// require('es6-promise').polyfill();
// require('isomorphic-fetch');


const NYT_API_KEY = '7a608b45df6043668bf426791ba211c4';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const searchURL = URL + this.state.searchTerm
      fetch(searchURL)
      .then(response => response.json())
      .then(response => this.setState({reviews: response.results}))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h3>Search Reuslts</h3>
        < MovieReviews reviews={this.state.reviews} />
        <form onSubmit={this.handleSubmit}>
          <label>Search terms:
            <input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
          </label>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
