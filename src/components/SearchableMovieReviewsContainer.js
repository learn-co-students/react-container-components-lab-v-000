import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'vNh9aCGP62I1SF40h9PtcIaZgXAVCA28';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ''
  }
  // Below, keywords parameter will be replaced by string searchTerm value stored in state object
  fetchReviews = keywords => {
    fetch(URL.concat(keywords))
      .then(response => response.json())
      .then(response => this.setState({ reviews: response.results }))
  }
  // Below, event object parameter comes from onSubmit event handler in <form>
  handleFormSubmission = event => {
    event.preventDefault(); // prevent the default form submit action
    this.fetchReviews(this.state.searchTerm)
  }
  // Below, event object parameter comes from onChange event handler in text field <input>
  handleSearchInputChange = event => this.setState({ searchTerm: event.target.value });

  render() {
  	return (
      <div className="searchable-movie-reviews">
  	    <form onSubmit={this.handleFormSubmission}>
  	      <label htmlFor="search-field">Search <em>New York Times</em> Movie Reviews Containing Key Terms:</label>
  	      <br />
  	      <input 
            type="text"
            id="search-field"
            value={this.state.searchTerm}
            onChange={this.handleSearchInputChange}
            style={{ width: 300 }} />
          <br />
  	      <button type="submit">Search Reviews</button>
  	    </form>
        {this.state.reviews.length > 0 && <h3>Movie Reviews Matching Search Criteria:</h3>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
  	);
  }

}

export default SearchableMovieReviewsContainer;

/*
// Specifications for SearchableMovieReviewsContainer container component:
// SearchableMovieReviewsContainer should have state
// SearchableMovieReviewsContainer should have the state properties "reviews" and "searchTerm"
// SearchableMovieReviewsContainer should have top-level element with class "searchable-movie-reviews"
// SearchableMovieReviewsContainer hould fetch data from the New York Times API on form submission
// SearchableMovieReviewsContainer should render reviews after reviews state is updated
// To query the NYTimes search API, make a .fetch() call to the URL: https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=<your key here>&query=<search-term>
*/
