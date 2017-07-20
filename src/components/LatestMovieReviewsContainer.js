import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '090c7705332340c691e927aeb9ce6cbc';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
  constructor () {
    super()
    this.state = {
      reviews: []
    }
  }

  componentWillMount () {
    fetch(URL)
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }))
  }

  render () {
    return (
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
