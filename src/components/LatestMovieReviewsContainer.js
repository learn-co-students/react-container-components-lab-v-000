import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${'S7LhLdJNdlscjb9VyZAPHafw9G05Zrgg'}`;

// api key- S7LhLdJNdlscjb9VyZAPHafw9G05Zrgg
// s- 4rX0a8hDjxN3xGOj

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {

  constructor(){
    super()

    this.state = {
      reviews: []
    }
  }

  // maybe i can adapt this
  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      // .then(movieReviews => console.log(movieReviews))
      .then(movieReviews => this.setState({
        reviews: movieReviews.reviews
      }))
  }


  render() {
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>

    )
  }
}

export default LatestMovieReviewsContainer;
