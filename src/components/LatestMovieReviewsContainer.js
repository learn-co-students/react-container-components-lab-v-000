import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'C8HisK0Zi6CBtJLZueaA7OB8xvnfvKDm';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`;
            

class LatestMovieReviewsContainer extends Component {

    state = {
      reviews: []
  };

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(res => this.setState({ reviews: res.results }));
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