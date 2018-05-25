import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews.js'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  getReviews = () => {
    fetch(URL + `&query=${this.state.searchTerm}`)
    .then(res => {
      return res.json()
    })
    .then(reviews => {
      this.setState({
        reviews: reviews.results
      })
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getReviews();
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form className="searchReview" onSubmit={this.handleSubmit}>
          <label>
            Search: 
            <input type='text' value={this.state.searchTerm} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
