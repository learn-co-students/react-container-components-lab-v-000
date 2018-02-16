// Code SearchableMovieReviewsContainer Here
import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json';

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let searchURL = URL + `?api-key=${NYT_API_KEY}&query=` + this.state.searchTerm;
    fetch(searchURL)
      .then(response => response.json())
      .then(response => this.setState({ reviews: response.results }));
  }

  render () {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit} >
          <label>Search the movie reviews:</label>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
          <input type="submit" />
        </form>
        {this.state.reviews.length > 0 && <h2>Your Results</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
