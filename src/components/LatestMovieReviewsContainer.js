import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(response => this.setState({ reviews: response.results }))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Latest Movie Reviews</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}


//passing {this.state.reviews} to <MovieReviews /> as a prop
//letting MovieReviews do the work of rendering
//test probably won't pass until MovieReviews is working