import React, { Component } from 'react';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      searchTerm: '',
    }
  }

  handleSearch = (event) => {
    event.preventDefault();

    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(resp => resp.json())
      .then(resp => this.setState({ reviews: resp.results }))
  }

  handleSearchInputChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSearch}>
        <label>Search Movie Reviews</label>
        <input type="text" onChange={this.handleSearchInputChange}/>
        <input type="submit" />
      </form>
      {this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
