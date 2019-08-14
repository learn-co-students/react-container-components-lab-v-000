import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'OCJ5gxjUtQL5FNEsp34GTA04LrKgWvQM';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {

  state = {
    reviews: []
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }

  fetchLatests = () => {
    fetch(URL)
    .then(res => res.json())
    .then(({data}) => {
      this.setState({ reviews: data.map( review => ({ title: review.display_title }))})
    })
  }

  componentDidMount() {
    this.fetchLatests.bind()
  }

}

export default LatestMovieReviewsContainer;