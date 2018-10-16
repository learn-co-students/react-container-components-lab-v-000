import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'e77d16dc169a45808f88a21cb7f250d7';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//             + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     reviews: []
  //   }
  // }

  // componentDidMount() {
  //   fetch(URL)
  //   .then(response => console.log(response))
  //   .then(data => this.setState({reviews: data}))
  //
  // }

  showMovies = () => {
    return this.props.reviews.map(function (review) {
      return <div key={review.display_title}><MovieReviews title={review.display_title} content={review.headline}/></div>
    })
  }

  render() {
    return (
      <div className="latest-movie-reviews">
      {this.showMovies()}
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;
