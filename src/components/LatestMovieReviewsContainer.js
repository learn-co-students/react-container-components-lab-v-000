import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f0e37c12db1743f58e7c18a287560bef';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  
  state = {
    reviews: []
  }
  
 allReviews = () => {
    fetch(URL)
    .then(res => res.json())
    .then(data => 
      this.setState({
        reviews: data.results}))
  }
 

  componentDidMount() {
    this.allReviews()
  }

   render() {

    return(
      <div className="latest-movie-reviews">
      <MovieReviews reviews={this.state.reviews} />
      </div>
      )
    }
}