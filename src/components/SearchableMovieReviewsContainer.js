import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const searchURL = URL + `&query=${this.state.searchTerm}`
    fetch(searchURL)
      .then(res => res.json())
      .then(json => this.setState({reviews: json.results}))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h2>Search Reviews</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
          <input type="submit" value="Search Reviews"/>
        </form>
        < MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
