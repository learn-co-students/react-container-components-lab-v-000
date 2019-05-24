import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const key = process.env.REACT_APP_NYT_API_KEY;
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>
            + api-key=${key}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: []
   }

  searchReviews = (rev) => {
    fetch(URL)
      .then(r => r.json())
      .then(r => this.setState({ reviews: r.results }));
    }

    componentDidMount() {
      this.searchReviews();
    }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.state.searchTerm
  }


  render() {
    return (
      <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit}>
          <label>
            Search
            <input type="text" onChange={this.handleChange} value={this.state.searchTerm} />
          </label>
          <button type="submit">Submit</button>
      </form>
      <MovieReviews reviews={this.state.reviews} />
    </div>
    )
  }
}

export default SearchableMovieReviewsContainer
