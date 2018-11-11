import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '8575e74579b6487792ec4d2943f5b9b8';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  fetchData = () => {
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        this.setState({
          reviews: json.results.map(result => result.summary_short)
        })
      })
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
