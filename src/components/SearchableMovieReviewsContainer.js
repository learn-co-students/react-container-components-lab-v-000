import React from 'react';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
  + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleSubmit = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  handleSearchInputChange = (event) => {
    event.preventDefault();

    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(result => result.json())
      .then(result => this.setState({ reviews: result.results }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input id="search-input" type="text" onChange={this.handleSearchInputChange}/>
          <button type="submit">Search</button>
        </form>
        {this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}