// Code SearchableMovieReviewsContainer Here
import React from 'react';

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: this.props.reviews,
      searchTerm: ''
    }
  }
  render() {
    return (
      <div className="searchable-movie-reviews"></div>
    )
  }
}

export default SearchableMovieReviewsContainer;
