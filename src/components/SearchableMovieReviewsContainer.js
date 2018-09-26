import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  };

  fetchReviews = () => {
    fetch(URL)
      .then(res => res.json())
      .then(data => data.results);
  };

  componentDidMount() {
    this.fetchReviews();
  }

  render() {
    console.log(this.state.reviews);
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit} />
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
