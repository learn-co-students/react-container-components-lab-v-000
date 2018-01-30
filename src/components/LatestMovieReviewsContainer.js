import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';
require('es6-promise').polyfill();


const NYT_API_KEY = 'fb6b214e12a3441cb2501b658fd7a6f0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


// class component with state
class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(URL).then(response => response.json())
      .then(reviews => this.setState({reviews: reviews.results}))
  }

  render() {
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
