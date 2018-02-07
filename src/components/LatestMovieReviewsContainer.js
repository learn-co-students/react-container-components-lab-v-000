import React, { Component } from 'react'
import 'isomorphic-fetch'

import MovieReviews from './MovieReviews'

const NYT_API_KEY = '1e7dbeed944c47968668bf6b65030e0e';
const NYT_API_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    fetch(NYT_API_URL)
      .then( resp => resp.json() )
      .then( respJson => this.setState({ reviews: respJson.results }) )
      .catch( error => console.error(error) )
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
