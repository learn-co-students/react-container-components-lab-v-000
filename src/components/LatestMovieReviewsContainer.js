import React, { Component } from 'react';
import 'isomorphic-fetch';
import ReviewList from './MovieReviews'

const NYT_API_KEY = 'YGLkjirUKg68ZLAbGaX8XkeU7AOGqQEc';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

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
      .then(data => {
        this.setState({
	          reviews: data.results
	        })
	      })
  }

  render() {
    return (
      <div className="latest-movie-reviews">
      <ReviewList reviews={this.state.reviews} />
    </div>
  )}
}

export default LatestMovieReviewsContainer