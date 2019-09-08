import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = 'zaQfGC1AYGdzs9j5Slkeuwh4TlZXPfZu';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
  state = { reviews: []}

componentDidMount() {
  fetch(URL)
  .then(response => response.json())
  .then(reviews => this.setState({ reviews }))
}

render() {
  return (
      <div className="latest-movie-reviews">
      <h2>The Latest Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>

  )
 }
}

export default LatestMovieReviewsContainer
