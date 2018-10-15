import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
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
      return <div key={review.title}><MovieReviews title={review.title} content={review.content}/></div>
    })
  }

  render() {
    return (
      <div>
      {this.showMovies()}
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;
