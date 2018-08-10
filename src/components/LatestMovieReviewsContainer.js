import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'e3f5ac8ea1ec474daef77c33ec5f07e7';
const URL = 
  'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + 
  `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends React.Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          reviews: data.results
        })
      })
  }

  render() {
    return (
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

