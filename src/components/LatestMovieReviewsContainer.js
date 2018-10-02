import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '1a77f877f4ed47f5b43e5b3a7224cca1';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(json => this.setState({
        reviews: json.results,
      }));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Latest Movie Reviews</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
