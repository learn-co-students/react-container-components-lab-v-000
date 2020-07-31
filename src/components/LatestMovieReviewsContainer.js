import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  state = { 
    copyright: "",
    reviews: []
  };

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(
        ({copyright, results}) => this.setState({
          copyright: copyright,
          reviews: results
        })
      )
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <p><strong>{this.state.copyright}</strong></p>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;