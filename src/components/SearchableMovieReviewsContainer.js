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
        <div className="form-row mb-3" >
          <div className="col-10" ><input type="text" className="form-control" value={this.state.searchTerm} onChange={this.handleChange} /></div>
          <div className="col-2" >
            <button className="btn btn-primary" onClick={this.handleSearch}>Search</button>
          </div>
        </div>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSearch(event) {
    event.preventDefault()
    if (this.state.searchTerm === '') return
    let url = URL + `&query=${this.state.searchTerm}`
    fetch(url)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({
          reviews: resp.results
        })
      })
  }
}

export default SearchableMovieReviewsContainer;
