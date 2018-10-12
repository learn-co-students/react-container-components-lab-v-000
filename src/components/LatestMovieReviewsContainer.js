import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '43e2fcfb0b704ea3b536d2b9ac916da5';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(reviews => this.setState({reviews: reviews.results}));
  }

  render() {
    return <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} text="Latest Movie Reviews" />
      </div>
  }

}

export default LatestMovieReviewsContainer
