// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const baseURL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
const apiKey = `api-key=${NYT_API_KEY}`

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  updateSearch = () => {
    const newTerm = document.getElementById('search').value
    this.setState({searchTerm: newTerm})
    this.getReviews()
  }

  getReviews = () => {
    const searchText = this.state.searchTerm
    const URL = baseURL + apiKey + searchText
    fetch(URL)
      .then(response => response.json())
      .then((data => this.setState({movies: data.results})))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
      <input id="search"/>
      <button onClick={this.updateSearch}/>
      <div>
        <MovieReviews reviews={this.state.reviews} />
      </div>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
