import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

const NYT_API_KEY = '37494152d61040ddb3a3e3f46a2f5f83';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(reviews => this.setState({ reviews: reviews.results }))
  }

  render() {
    return(
      <div className="latest-movie-reviews">
        <br />
        Latest Movie Reviews
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
