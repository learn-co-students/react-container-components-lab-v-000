import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSearchInputChange = event => this.setState({ searchTerm: event.target.value })

  handleSubmit = event => {
    event.preventDefault()
    fetch(URL.concat(this.state.searchTerm))
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
		    }
		    return response.json();
      }).then(reviews => this.setState({reviews}))
  }

  render() {
    return(
      <div className='searchable-movie-reviews'>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor='search-input'>Search Movie Reviews</label>
          <input id='search-input' type='text' onChange={this.handleSearchInputChange} />
          <button type='submit'>Submit</button>
        </form>
        { this.state.reviews.length > 0 && <h3>Movie Reviews:</h3> }
        <MovieReviews reviews={this.state.reviews} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
