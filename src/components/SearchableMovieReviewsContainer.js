import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const SEARCH = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`
    fetch(SEARCH)
    .then(response => response.json())
    .then(movieReviewsData => this.setState({ reviews: movieReviewsData.reviews }))
  }


  onChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
        <form onSubmit={this.onSubmit}>
          <label> Enter a Search Term: </label>
            <br />
            <input type="text" onChange={this.onChange} value={this.state.searchTerm} />
            <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
