import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      reviews: []
    };
  }

  handleUpdate = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSumbit = (event) => {
    event.preventDefault();
    fetch(URL.concat(this.state.searchTerm))
      .then(response => response.json())
      .then(json => this.setState({ reviews: json.results }));
  }

  componentWillMount() {
    fetch(URL)
      .then(response => response.json())
      .then(json => this.setState({ reviews: json.results }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
      Search:
        <input type="text" handleSumbit={this.handleSubmit} handleUpdate={this.handleUpdate}/>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
