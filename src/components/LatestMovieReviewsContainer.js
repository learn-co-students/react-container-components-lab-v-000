import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
// fetch a list of the most recent reviews and display them
// should have a top-level wrapping element 
//    with class latest-movie-reviews.

export default class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: [],
    };
  }

  componentWillMount() {
    fetch(URL)
      .then(res => res.json())
      .then((response => this.setState({ reviews: response.results })));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h3>The Latest Reviews:</h3>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}