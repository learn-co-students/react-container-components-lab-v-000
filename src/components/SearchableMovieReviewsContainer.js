import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'


// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
      reviews: []
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value})
  }


  handleSubmit(e) {
    e.preventDefault;
    fetch(`${URL}${this.state.searchTerm}${NYT_API_KEY}`  )
      .then(response => response.json())
      .then(reviews => this.setState({ reviews: reviews.results }))
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}></input>
          <button type="submit">Search</button>
        </form>
        <br></br>
        <MovieReviews reviews={this.state.reviews} />
      </div>

    )
  }

}
