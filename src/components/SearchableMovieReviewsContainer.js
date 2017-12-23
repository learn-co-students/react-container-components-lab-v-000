// Code SearchableMovieReviewsContainer Here
import React from 'react';
import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends React.Component {

  constructor() {

    super();

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer;
