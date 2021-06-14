import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'IET2OiHptrZvHtKPNsvSf4myfAYkeMTF';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: []
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then(resp => resp.json())
      .then(reviewData => this.searchResults(reviewData))
  }

  searchResults = (reviewData) => {
    if (reviewData.results === []) {
      alert("Please try another term")
      return
    } else {
      this.setState({reviews: reviewData.results})
    }
  }

  searchForm = () => {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <label>Enter a search term:</label><br />
        <input type="text" name="searchTerm" onChange={this.handleChange} value={this.state.searchTerm} /><br />
        <button type="submit">Search</button>
      </form>
    )
  }

  render() {
    return (
      <div>
        {this.searchForm()}
        <div className="searchable-movie-reviews"><MovieReviews reviews={this.state.reviews} /></div>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer