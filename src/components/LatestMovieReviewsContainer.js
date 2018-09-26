import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = '471c6571474f4ed2b63e5aaa0f0bbf91';
const URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' +
  `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  };

  fetchReviews = () => {
    fetch(URL)
      .then(res => res.json())
      .then(data => data.results);
  };

  componentDidMount() {
    this.fetchReviews();
  }

  render() {
    console.log(this.state.reviews);
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
