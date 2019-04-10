import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'QvNb8ijnk24AOUG8TFzadg1YHBO4iaLD';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
          + `&api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  state ={
    reviews: []
  }

  getLatestMovieReviews = () => {
    fetch(URL)
    .then(response => response.json())
    .then(response => this.setState({reviews: response.results}));
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <button onClick={this.getLatestMovieReviews}>Find Latest Reviews</button>
        <MovieReviews  reviews={this.state.reviews}/>
      </div>)
  }


}

export default LatestMovieReviewsContainer
