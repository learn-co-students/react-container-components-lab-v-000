import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'C8HisK0Zi6CBtJLZueaA7OB8xvnfvKDm';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`;
            

// Code LatestMovieReviewsContainer Here
class LatestMovieReviews extends Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(movieReviews => this.setState({ reviews: movieReviews.results }));
  }
  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>Latest Movie Reviews:</h2> 
        <MovieReviews reviews={this.state.reviews} />
      </div>
      );
  }
}

export default LatestMovieReviewsContainer