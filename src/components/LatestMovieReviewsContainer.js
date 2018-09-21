import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '4f0ef80aa8254edbaa549558907d0558';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {

  constructor(){
    super();

    this.state = {
      reviews: []
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(response => response.json())
    .then(response => this.setState(
      {reviews: response.results})
    );
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <h3>Latest Reviews: </h3>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }


}


export default LatestMovieReviewsContainer;
