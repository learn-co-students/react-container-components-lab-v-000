import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'hLishxGlyIdfK4tG1PZvA0Xw3kGEWApk';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  state={
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
      .then(r=>r.json())
      .then(data => this.setState({reviews: data.results}));
  }

  render(){
    return (
      <div className="latest-movie-reviews" >
        <h2>The Latest Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;
