import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

const NYT_API_KEY = '37494152d61040ddb3a3e3f46a2f5f83';
let URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(response => response.json())
      .then(reviews => this.setState({ reviews: reviews.results }))
  }

  handleInput = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>
            Movie Search Term:
            <input type="text" onChange={this.handleInput}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        
        <br />
        Search Results:
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
