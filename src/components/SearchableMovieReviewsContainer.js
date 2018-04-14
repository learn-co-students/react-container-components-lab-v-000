import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  render() {
    return (
      <div className="searchable-movie-reviews" >
        <input type="text" className="form-control" value={this.state.searchTerm} onChange={this.handleChange} />
        <button className="btn btn-primary" onClick={this.handleSearch}>Search</button>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({
          reviews: resp.results
        })
      })
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSearch(event) {
    event.preventDefault()

  }
}

export default SearchableMovieReviewsContainer;
