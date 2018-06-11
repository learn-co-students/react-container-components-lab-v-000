// Code SearchableMovieReviewsContainer Here
import React from 'react';
import MovieReviews from './MovieReviews';

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      reviews: []
    };
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h2>Searchable Reviews: </h2>
        <MovieReviews reviews = {this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
