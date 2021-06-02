import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'a9BexMGmIiXT8MM9MeViG9bP99fomTJO';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component{
  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(reviews => {
      this.setState({ reviews: reviews.results })
    })
  }

  render() {
    
    return (
      <div className="latest-movie-reviews">
        <h2>The Latest Reviews:</h2>
        <ul>
          <MovieReviews reviews={this.state.reviews} />
        </ul>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer

//passing reviews as props to movie review, presentational component
