import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
// Code SearchableMovieReviewsContainer Here

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super();

    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    fetch(URL.concat(this.state.searchTerm))
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(reviews => this.setState({reviews: reviews.results}));
    }

  handleSearchInputChange = event => this.setState({searchTerm: event.target.value});

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleSearchInputChange} />
          <button type="submit">Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
export default SearchableMovieReviewsContainer;
