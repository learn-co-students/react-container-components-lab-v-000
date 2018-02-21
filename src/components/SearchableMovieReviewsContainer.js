// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  getReviews = () => {
    fetch(URL + `&query=${this.state.searchTerm}`)
     .then(res => res.json())
     .then(response =>
       this.setState({
         reviews: response.results
       })
     )
  }

  findSearchTerm = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getReviews();
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h3>Search a Review</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.findSearchTerm}/>
          <input type="submit" value="Search"/>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
