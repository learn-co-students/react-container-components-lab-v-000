import React, { Component } from 'react'
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY = '08218351351847e7b374e72029121099';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  // when the search is submitted, it performs the fetch and updates the state
  handleSubmit = (e) => {
    fetch(URL + `&query=${e.target.value}`)
      .then(response => response.json())
      .then(response => this.setState({reviews: response.results}))
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
          <button type="submit" onClick={this.handleSubmit}>Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
