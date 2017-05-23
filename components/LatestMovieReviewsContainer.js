import React from 'react';
import MovieReviews from './MovieReviews';

export default class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = { reviews: [] };
  }
  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

