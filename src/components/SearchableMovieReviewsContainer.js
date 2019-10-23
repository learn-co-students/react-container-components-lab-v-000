import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'X0F9aEMtFkRkIM9kGPuCXCO1CXQ0sEYq';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      reviews: []
    };
  };

  handleChange = (e) => {
    this.setState({
     [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(URL + `&query=${this.state.searchTerm}`)
    .then(response => response.json())
    .then((response) => this.setState({
      reviews: response.results
    }, () => console.log(this.state)));
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="query" value={this.state.query} onChange={this.handleChange} />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    );
  };
};
