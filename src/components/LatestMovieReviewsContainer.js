import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '7UrYzED4R4HsgqNAHUARKq6CzVV3EWEk';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  render () {
    return (
      <div className='latest-movie-reviews'>
      <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

  componentDidMount() {
     this.fetchReviews()
  }

  fetchReviews = () => {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      this.setState=({
        reviews: data.results
      })
    })
  }

}
export default LatestMovieReviewsContainer;
