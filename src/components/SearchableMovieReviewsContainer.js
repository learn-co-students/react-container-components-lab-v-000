import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'NOQwJ8ilrr5SGftuvLTDTjJGZJKn3Un0';
const url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  }
  fetchReviews = (event) => {
    event.preventDefault();
    let query = this.state.searchTerm;
    fetch(url + `&query=${query}`)
    .then(response => response.json())
    .then(data => (
      this.setState({reviews: data.results}))
    );
  }
  handleChange = (event) => (
    this.setState({searchTerm: event.target.value})
  )
  componentDidMount() {
  }
  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.fetchReviews}>
          <input type='text' value={this.state.searchTerm} onChange={this.handleChange}/>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
