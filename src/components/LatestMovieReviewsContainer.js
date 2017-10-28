import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: []
    }
  }

  updateReviews(resp) {
    this.setState({
      reviews: resp.results
    })
  }

  componentWillMount() {
    fetch(URL)
      .then(res => res.json())
      .then(resp => this.updateReviews(resp))
  }

  render() {
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}
