import React, { Component } from 'react';
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
import MovieReviews from './MovieReviews'

class LatestMovieReviewsContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return (this.state.reviews !== nextState.reviews)
  // }

  // Not sure why we don't use componentDidMount since
  // componentWillMount is problematic

  componentWillMount() {
    fetch(URL)
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      this.setState({
        reviews: res.results
      })
    })

  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>The Latest Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default LatestMovieReviewsContainer
