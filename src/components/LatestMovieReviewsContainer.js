import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '28f872e13cd54fb8af6272f519915996';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      movieReviews: [],
      wtfFactor: "on"
    }
  }

  componentWillMount() {
    // this.state & this.setState are available here..
    fetch(URL)
      .then(resp => resp.json())
      .then((movieReviews) => {
        // ..but now this is undefined
        debugger;
        this.setState({movieReviews: movieReviews.results});
      });
  }


  render() {
    return (
      <div className="latest-movie-reviews">
      <h1>Latest Reviewss</h1>
      <MovieReviews movieReviews={this.state.movieReviews}/>
      </div>
    );
  }
}
