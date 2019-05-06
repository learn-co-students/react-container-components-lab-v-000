import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const NYT_API_KEY = 'rvCYWGdUiRDh4K9J4xklROUI2zJEsHFP';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
// rvCYWGdUiRDh4K9J4xklROUI2zJEsHFP

// fetch a list of the most recent reviews and display them

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews:[]
    }
  }

  fetchMovieReviews = () => {
    fetch(URL)
    .then(response => response.json())
    .then(data => this.setState({reviews: data.results}))
  }

  componentDidMount() {
    this.fetchMovieReviews()
  }

  render() {
    return (
      <div className="latest-movie-reviews"><MovieReviews reviews={this.state.reviews}/></div>
    )
  }

}


export default LatestMovieReviewsContainer
