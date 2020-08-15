// To do: fetch a list of the most recent reviews and display them. 
  // should have a top-level wrapping element with class latest-movie-reviews.

//   <LatestMovieReviewsContainer />
//   ✓ should have state
//   ✓ should have a state property "reviews"
//   ✓ should have top-level element with class "latest-movie-reviews"
//   ✓ should fetch data from the New York Times API
//   ✓ should render reviews after reviews state updated

import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here:

class LatestMovieReviewsContainer extends Component {
    constructor() {
      super();
  
      this.state = {
        reviews: []
      };
    }
  
    componentDidMount() {
      fetch(URL)
        .then(res => res.json())
        .then(response => this.setState({ reviews: response.results }));
    }
  
    render() {
      return (
        <div className="latest-movie-reviews">
          <h2>The Latest Reviews:</h2>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      );
    }
  }
  
  
  export default LatestMovieReviewsContainer;