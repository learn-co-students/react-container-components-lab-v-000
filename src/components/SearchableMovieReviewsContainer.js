import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = '18a2d488af464f439a7a9bbb281db219'
const API_URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
      reviews: []
    };
  }

  handleChange = (e) => {
    let query = e.target.value
    this.setState({searchTerm: query})
  }

  search = () => {
    const url = `${API_URL}&query=${this.state.searchTerm}`
    fetch(url)
      .then(response => response.json())
      .then(reviews => this.setState({ reviews: reviews.results }) );
  }

  componentDidMount() {
    this.search();
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <div className="input-field">
          <input value={this.state.searchTerm} onChange={this.handleChange}/>
          <button onClick={this.search}>Search</button>
        </div>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
