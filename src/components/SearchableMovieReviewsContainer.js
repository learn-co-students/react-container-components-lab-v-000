import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  submitForm() {
    fetch(`${BASE_URL}${this.state.searchTerm}`)
      .then(resp => resp.json())
      .then(data => this.setState({ reviews: data.results }))
  }

  onInputChange(event) {
    event.preventDefault()

    this.setState({
      searchTerm: event.target.value
    })

  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.submitForm}>
          <input
            id='search-input'
            type="text"
            style={{width: 300}}
            onChange={this.onInputChange} />
          <button type="submit">Submit</button>
        </form>
        {this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
