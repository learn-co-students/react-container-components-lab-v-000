import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = process.env.REACT_NYT_API_KEY;
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      reviews: []
    };
  }

  handleChange = event => this.setState({ searchTerm: event.target.value });

  handleSubmit = () => {
    fetch(URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }, () =>
      console.log(this.state.reviews)
    ));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" id="search" placeholder="Search for..." value={this.state.searchTerm} />
          <button onClick={this.handleSubmit} type="button" id="button">Search</button>
        </form>
        {this.state.reviews ? ( <MovieReviews reviews={this.state.reviews} />) : null }
      </div>
    );
  }

}

export default SearchableMovieReviewsContainer;
