import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ad704d69c1a94d37965bc1a74f18e64b';
let BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends React.Component {
  state = {
    reviews: [],
    searchTerm: ''
  }

  inputChangeHandler = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  submitQueryHandler = (event) => {
    event.preventDefault();
    //URL += `{this.state.searchTerm}`
    //console.log(URL)

    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(movies => this.setState({
        reviews: movies.results}))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h1>Search for Movie Reviews</h1>
        <form onSubmit={this.submitQueryHandler}>
          <input type="text" onChange={this.inputChangeHandler}/>
          <button type="submit">Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
export default SearchableMovieReviewsContainer;
