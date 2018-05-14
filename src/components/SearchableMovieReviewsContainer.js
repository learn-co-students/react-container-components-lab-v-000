import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = '65cdc51652e8423ba1f752d50b076daa';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
  + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSearch = (e) => {
    e.preventDefault();
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then(response => response.json)
      .then((reviews => this.setState({ reviews: reviews.results })));
  };

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    })
  };

  render() {
    return(
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSearch}>
          <input onChange={this.handleChange} type='text'/>
          <button type='submit'>Search</button>
        </form>
        <h1>Movie review by search:</h1>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
export default SearchableMovieReviewsContainer
