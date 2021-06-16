import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ewgHi1jG7YBIauDd0vTG47G1qSLAL1N4';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
    constructor(props) {
      super(props);
   
      // Initial state here...
      this.state = {
          reviews: []
      };
    }
   
    componentDidMount() {
        fetch(URL)
          .then(response => response.json())
          .then(reviewData => this.setState({ reviews: reviewData.results }))
      }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.reviews === nextState.reviews) {
          return false
        }
        return true
      }
    

    render() {
      // Return JSX that renders into HTML
      return(
        <div className="latest-movie-reviews">
          <MovieReviews reviews={this.state.reviews}/>
          </div>)
    }
  }

  export default LatestMovieReviewsContainer
