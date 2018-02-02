// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import MovieReviews from './MovieReviews';
import 'isomorphic-fetch';

// https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=f98593a095b44546bf4073744b540da0&query=coco
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

const searchResultsInBlue = {
  color: 'blue',
};

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ""
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = this.state.searchTerm;
    URL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=" + NYT_API_KEY + "&query=" + searchTerm;
    fetch(URL)
      .then(response => response.json())
      .then(reviews => {
        this.setState({
          reviews: reviews.results
        })
      })
  }

    render() {
      return(
        <div className="searchable-movie-reviews" style={searchResultsInBlue}>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleSearch} type="text" placeholder="search terms here" value={this.state.searchTerm} />
            <input type="submit" />
          </form>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      )
    }
}

export default SearchableMovieReviewsContainer;
