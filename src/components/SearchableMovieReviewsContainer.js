// Code SearchableMovieReviewsContainer Here

import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: []
    }
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  handleClick = (e) => {
    e.preventDefault()
    fetch(URL.concat(this.state.searchTerm))
    .then(res => res.json())
    .then(res => this.setState({ reviews: res.results }))
  }

  render() {
    return(
      <div className='searchable-movie-reviews'>
      <form>
      <input type='text' onChange={this.handleChange}/>
      <button type='submit' onClick={this.handleClick}>Submit</button>
      </form>

      <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
