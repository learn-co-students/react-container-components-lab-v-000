import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
// cbcef53ad7234873bd3ebe3fb2ea292d
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  ComponentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then((reviews => this.setState({ reviews })));
  }

  render() {
    return(
      <div className="latest-movie-reviews">
      <MovieReviews reviews={this.state.reviews}/>
      </div>
    ) 
  }

}