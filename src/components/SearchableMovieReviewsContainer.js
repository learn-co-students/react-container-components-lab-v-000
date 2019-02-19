import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '3GBSfA5H5IcXvc3W2artipEtTdBl4AAc';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = { reviews: [], searchTerm: '' }
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let url = URL + `&query=${this.state.searchTerm}`

    fetch(url)
      .then(response => response.json())
        .then(movies => {
          this.setState({ reviews: movies.results })
        })
  }

  renderSearchableMovieReviews = () => {
    return (
      <ol>
        <MovieReviews reviews={ this.state.reviews } />
      </ol>
    )
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
          <input type="submit" value= "Search"/>
        </form>
        {this.renderSearchableMovieReviews()}
      </div>
    )
  }
}
