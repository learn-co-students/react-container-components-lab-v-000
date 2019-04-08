import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'NOQwJ8ilrr5SGftuvLTDTjJGZJKn3Un0';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }
  fetchReviews = () => {
    fetch(URL)
    .then(response => response.json())
    .then(data => (
      this.setState({reviews: data.results}))
    )
  }
  componentDidMount() {
    this.fetchReviews()
  }
  render() {
    return (
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;
