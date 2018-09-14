import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '0e3bdfeff2f442e98fb03f733c799a22';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;
class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  }

  handleChange = (e) => this.setState({searchTerm: e.target.value})

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${URL}${this.state.searchTerm}`)
      .then(response => response.json())
      .then( ({results}) => {
        this.setState({reviews: results})
      })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <div className="search-form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search Reviews" value={this.state.searchTerm} onChange={this.handleChange}/>
            <input type="submit" value="Search" />
          </form>
        </div>
        {this.state.reviews.length > 0 ? <h2>Movie Review By Search:</h2> : null}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
