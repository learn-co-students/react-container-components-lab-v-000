import React from 'react'
import MovieReviews from './MovieReviews'
const { fetch } = require('whatwg-fetch')

export default class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  componentWillMount() {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json')
      .then((res => this.setState({ reviews: res.results })))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
