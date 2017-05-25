'use strict'

import React from 'react'
import 'whatwg-fetch'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'fd55e4f22960412fb09b2b8c889c184c'
const url = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${NYT_API_KEY}`

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    fetch(url)
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }))
  }

  render() {
    return (
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
