import React from 'react';
import NYT_API_KEY from './LatestMovieReviewsContainer';
import URL from './LatestMovieReviewsContainer';
import componentWillMount from './LatestMovieReviewsContainer';
import MovieReviews from './MovieReviews';

export default class SearchableMovieReviewsContainer extends React.Component {

  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }

  render() {
    return (
      <div className = "searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
