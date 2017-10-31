// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '5502dbf583114b47b015d0df0c050295'


class SearchableMovieReviewsContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchTerm: '',
      reviews: []
    };
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleFormSubmit = (event) => {
    const searchTerm = this.state.searchTerm
    const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${NYT_API_KEY}`;

    fetch(URL)
      .then(response => response.json())
      .then(reviews => this.setState({reviews: reviews.results}))
    event.preventDefault();
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Search
            <input type="text"
            value={this.state.value}
            onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit"/>
        </ form>

          <div>
            <MovieReviews reviews={this.state.reviews} />
          </div>
      </div>
    )

  }
}

export default SearchableMovieReviewsContainer;
