import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '5d3791b7d4a34b5b865a71f531787dba';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(resp => {
        let rev = resp.results
        this.setState({ reviews: rev })
      })
  }


  render() {
    return <div className='latest-movie-reviews'><MovieReviews reviews={ this.state.reviews }/></div>
  }
}

export default LatestMovieReviewsContainer
