import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='


export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    let searchURL = URL + `${this.state.searchTerm}` + `api-key=${NYT_API_KEY}`

    fetch(searchURL)
      .then(response => response.json())
      .then((reviews => this.setState({ reviews: reviews.results })));
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} />
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}