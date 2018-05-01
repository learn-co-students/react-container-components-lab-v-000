import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '023cf5d940ca414caf53ee138d59f027';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(URL).then(resp => resp.json()).then(reviews => this.setState({reviews: reviews.results}));
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
