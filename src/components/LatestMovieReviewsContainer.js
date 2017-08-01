import MovieReviews from './MovieReviews';
import React, { Component } from 'react';
import 'isomorphic-fetch';

const NYT_API_KEY = 'ecc15eedfe6a4e02bfcaaa62d3870e07';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;
// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component{
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  componentWillMount() {
    fetch(URL)
	   .then(res => res.json())
	   .then(response => this.setState({ reviews: response.results }));
  }


  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
