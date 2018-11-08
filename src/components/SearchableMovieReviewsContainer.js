import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'e27dad6a5e384051acd31ddea76db76b';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
  + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      reviews: []
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(URL + `&query=${this.state.searchTerm}`).then(resp => resp.json())
      .then(reviewsResp => this.setState({
        reviews: reviewsResp.results
      }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>
            Search Review
            <input type="text" onChange={this.handleChange} />
          </label>
          <input type="submit" value="submit" />
        </form>
        {this.state.reviews.length > 0 &&
          <MovieReviews reviews={this.state.reviews} />
        }
      </div>
    )
  }
}
