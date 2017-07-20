import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
const NYT_API_KEY = '827e1af75e5043328b4218dc7095feb6';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

  export default class LatestMovieReviewsContainer extends Component {
    constructor(){
      super();

      this.state = {
        reviews: []
      }
    }


    componentWillMount() {
      fetch(URL)
        .then(response => response.json())
        .then(reviews => this.setState({ reviews: review.results }))
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>

    )
  }


  }
