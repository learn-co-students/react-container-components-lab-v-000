import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'X0F9aEMtFkRkIM9kGPuCXCO1CXQ0sEYq';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    };
  };

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then((response) => this.setState({
      reviews: response.results
    }, () => console.log(this.state)));
  };

  render() {
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    );
  };
}
