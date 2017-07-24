// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'



const NYT_API_KEY = 'f6731f51774e4af5900c6b23e4140752';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
+ `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }
  componentWillMount() {
    fetch(URL)
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }));
  }
  render() {
    return(
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
        ))}
      </div>
    )
  }
}
