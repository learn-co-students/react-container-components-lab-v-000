import React from 'react'
import MovieReviews from './MovieReviews'
const { fetch } = require('whatwg-fetch')

export default class LatestMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json')
    .then((resp => this.setState({ reviews: resp.results })))
  }

  render() {
    return (
      <div className='latest-movie-reviews'>
      <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
