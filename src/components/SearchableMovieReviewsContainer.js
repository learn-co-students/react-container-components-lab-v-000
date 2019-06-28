import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '7UrYzED4R4HsgqNAHUARKq6CzVV3EWEk';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  state= {
    reviews:[],
    searchTerm:''
  }

handleSearchInputChange = event =>
    this.setState ({ searchTerm: event.target.value})

  handleSubmit = event => {
    event.preventDefault();
    fetch(URL.concat(this.state.searchTerm))
    .then(res => res.json())
    .then(res => this.setState({reviews: res.results}))
  }

  render () {
    return(
      <div className='searchable-movie-reviews'>
      <form onSubmit={this.handleSubmit}>
      <label htmlFor="search-input">Search Movie Reviews: </label>
      <input type='text' id="search-input" style={{ width :500 }} onChange={this.handleSearchInputChange}/>
      <button type="submit">Submit</button>
      </form><br/>
      {typeof this.state.reviews === 'object' && this.state.reviews.length > 0 && <h2>Movie Review by Search</h2>}
      <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
