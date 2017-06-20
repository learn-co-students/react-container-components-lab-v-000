import React, { Component } from 'react';
import MovieReviews from './MovieReviews';

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
 
    this.state = {
      searchTerm: '',
      reviews: []
    };

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchInputChange(e) {
    this.setState({ searchTerm: e.target.value });
  }


  handleSubmit(e) {
    e.preventDefault();
    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
} 

export default SearchableMovieReviewsContainer;
