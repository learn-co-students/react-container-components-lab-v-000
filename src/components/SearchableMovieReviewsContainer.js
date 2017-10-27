import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor () {
    super()

    this.state = {
      reviews: [],
      searchTerm: []
    }
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value,
    });
    const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
    const searchTerm = this.state.searchTerm
    const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?`
            + `query=${searchTerm}&`
            + `api-key=${NYT_API_KEY}`

    fetch(URL)
      .then(resp => resp.json())
      .then(resp => this.setState({reviews: resp.results}))
    }

    render () {
      return (
        <div className="searchable-movie-reviews"> 
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <MovieReviews reviews={this.state.reviews}/>
        </div>
      )
  }
}
