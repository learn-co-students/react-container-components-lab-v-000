// Code SearchableMovieReviewsContainer Here
// provide a searchable interface allowing the user to enter a search term
// and then receive a list of reviews that match the search term(s)
// should have a top-level wrapping element 
//   with class searchable-movie-reviews.

import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`;

export default class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
        reviews: [],
        searchTerm: ""
    }
  }

  searchReviews = (event) => {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    fetch(URL + this.state.searchTerm)
      .then(res => res.json())
      .then((response => this.setState({reviews: response.results})))
  }

  displayResults = () => {
    const {reviews} = this.state
    if (reviews.length > 0) {
      return <h3>Search Results:</h3>
    }
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          Search: <input onChange={this.searchReviews}></input>
          <button type="submit">Submit</button>
        </form>
        {this.displayResults()}
          
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}