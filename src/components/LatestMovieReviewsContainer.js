import React, { Component } from 'react'
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY = '08218351351847e7b374e72029121099';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    }
  }

  // waits until after the component has updated to update the state with new data
  componentDidUpdate() {
    fetch(URL)
      .then(response => response.json())
      .then(response => this.setState({reviews: response.results}))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;
