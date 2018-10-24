import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'd6028a8f9bb644f9af7ad595ad45d5d6';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    this.fetchReviews()
  }

  render(){
    return(
      <div className="latest-movie-reviews"><MovieReviews reviews={this.state.reviews}/></div>
    )
  }

  fetchReviews = () => {
    fetch(URL)
      .then(res=>res.json())
      .then(res => this.setState({reviews: res.results}));
  }
}

export default LatestMovieReviewsContainer
