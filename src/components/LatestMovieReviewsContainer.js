import React, { Component } from 'react'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = process.env.REACT_APP_NYT_MOVIES_API_KEY
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`

class LatestMovieReviewsContainer extends Component {

  state = {
    reviews: []
  }

  render() {
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

  componentDidMount() {
    fetch(`${URL}`)
    .then(response => response.json())
    .then(reviews => this.setState({ reviews: reviews.results }))
  }
}

export default LatestMovieReviewsContainer
