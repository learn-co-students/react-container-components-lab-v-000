import React from 'react'
import {fetch} from 'whatwg-fetch'

const MovieReviews = require('./MovieReviews')

export default class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=e82d9cf00b454211a631114226451ad3')
      .then(res => res.json())
      .then(response => setState({reviews: response.results})
    )
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>The Latest Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}
