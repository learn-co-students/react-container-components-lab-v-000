import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

  state = {
    searchTerm: '',
    reviews: []
  }

  handleOnChange = event => {
    this.setState({
    searchText: event.target.value
    })
  }

  handleSubmit = () => {
    fetch(URL.concat(this.state.searchTerm))
    .then(response => response.json())
    .then(reviews => this.setState({ reviews: reviews }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h1>SearchableMovieReviews Container</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleOnChange} value={this.state.searchTerm} />
          <button type="submit">Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
