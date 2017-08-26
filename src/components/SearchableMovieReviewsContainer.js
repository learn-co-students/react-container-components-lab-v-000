import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews.js'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

export default class SearchableMovieReviewsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }

  handleChange= (event) => {
    this.setState({searchTerm: event.target.value});

    var search_url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=";

    search_url += NYT_API_KEY + '&query=' + event.target.value

    fetch(search_url)
      .then(response => response.json())
      .then(reviews => this.setState({ reviews: reviews.results }));

  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form>
          <label>Search term: </label>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
        </form>
        <h1>Results:</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }

}
