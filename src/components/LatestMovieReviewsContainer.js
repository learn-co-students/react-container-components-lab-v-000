import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews.js';	

require('es6-promise').polyfill();
require('isomorphic-fetch');

const NYT_API_KEY = '578de9b2745f429bbb8e33e47e041953';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then((json) => {
      this.setState({
        reviews: json.results
      })
    });
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;