import React, { Component } from 'react';
// import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = process.env.REACT_APP_API_KEY;
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    return fetch(URL)
    .then(response => response.json())
    .then(JSON => {
      this.setState({
        reviews: JSON.results
      }, console.log(this.state.movies))
    })
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>Latest Movie Reviews</h2>
        <MovieReviews movies={this.state.reviews} testMessage={"this is a test message"} />
        <br />
        {URL}
      </div>
    )

  }


}


// https://api.nytimes.com/svc/movies/v2/reviews/all.json
