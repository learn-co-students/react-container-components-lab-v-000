import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      reviews: [],
      searchTerm: ''
    })
  }

  handleSubmit = () => {
    fetch(URL + this.state.searchTerm)
    .then(resp => resp.json())
    .then(json =>{
      this.setState ({reviews: json.results})
    })
  }

  handleChange = (e) => {
    this.setState ({
      searchTerm: e.target.value
    })
  }

  render() {

    return (
      <div className='searchable-movie-reviews'>
      <form onSubmit={this.handleSubmit}>
      <label>Search: </label>
      <input type='text' value={this.state.searchTerm} onChange={event => this.handleChange(event)} />
      </form>
      <ul>
      { this.state.reviews.length > 0 && <h2>I make the errors go away</h2> }
        <MovieReviews reviews={ this.state.reviews } />
        </ul>
    </div>
  )}
}

export default SearchableMovieReviewsContainer
