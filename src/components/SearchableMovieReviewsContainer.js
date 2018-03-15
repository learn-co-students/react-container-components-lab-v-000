import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    fetch(URL + this.state.searchTerm)
    .then(res => res.json())
    .then(response => this.setState({ reviews: response.results }))
  }

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Search Movies: 
            <input type='text' value={this.state.searchTerm} onChange={this.handleChange} />
          </label>
          <button type="submit">Search</button>
        </form>
        {this.state.reviews.length > 0 && <h2>Search Results:</h2>}

        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

