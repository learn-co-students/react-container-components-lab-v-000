import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'LKDXSZOu7ThG2VHL1W0aOGglyzI1KIxU';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;
//https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=<your key here>
// Code LatestMovieReviewsContainer Here


class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => {this.setState({ reviews: data.results })
    })
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}
export default LatestMovieReviewsContainer;
