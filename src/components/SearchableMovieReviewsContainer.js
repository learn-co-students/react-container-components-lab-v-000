import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }

  componentDidMount() {
    const searchTermURL = URL + this.state.searchTerm;
    fetch(searchTermURL)
      .then(response => response.json())
      .then(reviews => this.setState({reviews}));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h3>'This is what we found with your search term:'</h3>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
