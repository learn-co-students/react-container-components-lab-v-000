import React from 'react';
import UserInput from './UserInput.js';
import MovieReviews from './MovieReviews.js';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}?query=`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      searchTerm: ""
    };

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleSearchTermChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  }

  handleUserInput = (e) => {
    e.preventDefault();
    fetch(BASE_URL + this.state.searchTerm)
      .then(response => response.json())
      .then(response => this.setState({ revies: response.results }))
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <h3>Review:</h3>
        <UserInput
          handleUserInput={this.handleUserInput}
          handleSearchTermChange={this.handleSearchTermChange}
        />
        <MovieReviews
          reviews={this.state.reviews}
        />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
