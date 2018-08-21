import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'cafee19336e44057b228bce35e81087e';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviews extends Component {

  constructor() {
    super();
    this.state = {
      searchTerm: '',
      reviews: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);;
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit} id="queryForm">
          <label>Search for movie reviews:</label>
          <input type='text' onChange={this.handleChange} />
          <input type='submit' value='Search' />
        </form>

        <div id='movieReviewList'>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
    )
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then(resp => resp.json())
      .then(jsonResp => {
        this.setState({
          reviews: jsonResp.results
        });
      });
  }

  renderMovieReviews = () => {
    return this.state.reviews.map(movie => {
      return <MovieReviews key={movie.display_title} review={movie} />
    });
  }
}

export default SearchableMovieReviews;