import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';
require('es6-promise').polyfill();

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: []
    }
  }

  fetchLatestReviews = () => {
      fetch(URL)
      .then(result => result.json())
      .then(response => this.setState({ reviews: response.results }));
      console.log(this.state.reviews)
    }

    componentDidMount = () => {
      this.fetchLatestReviews();
    }

    render() {
      return(
        <div className="latest-movie-reviews">
         <MovieReviews reviews={this.state.reviews} />
        </div>
      )
    }
}
