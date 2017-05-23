import React from 'react'
import MovieReviews from './MovieReviews';

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = { reviews: [] };
  }
  render() {
    return (
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
