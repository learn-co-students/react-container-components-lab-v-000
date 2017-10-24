import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '49e36198ccd74790895a4cba6015ed80';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


class LatestMovieReviewsContainer extends Component {
  constructor(props) {
  super(props);

  this.state = {
    reviews: []
    };
  }

  componentWillMount() {
    fetch(URL)
      .then(response => response.json())
      .then(reviews => this.setState({ reviews: reviews.results }));
  }


  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
  )}
}

export default LatestMovieReviewsContainer;
