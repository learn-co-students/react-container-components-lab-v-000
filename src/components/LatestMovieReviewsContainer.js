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
       <ul><MovieReviews reviews={this.state.reviews}/></ul>
      </div>
    );
  }

  componentDidMount() {
    this.fetchLatests()
  }

  fetchLatests = () => {
    fetch(URL)
    .then(res => res.json())
    .then((data) => {
      this.setState({ reviews: data.results})
    })
  }

}

export default LatestMovieReviewsContainer;