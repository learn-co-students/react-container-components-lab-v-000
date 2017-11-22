// import React, { Component } from 'react';
import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './/MovieReviews';

const NYT_API_KEY = 'fafd51a1f75f40fe89633bfb1c6a77ea';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component{
  constructor(){
    super()

    this.state = {
      reviews: []
    }
  }

componentDidMount(){
  fetch(URL)
      .then(response => response.json())
      .then((response => this.setState({ reviews: response.results }) ) )
  }

  render(){
    return(
        <div className="latest-movie-reviews">
          <h2>The latest Reviews</h2>
          <MovieReviews reviews={this.state.reviews} />
       </div>
    )
  }
}

export default LatestMovieReviewsContainer;
