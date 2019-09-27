import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'FPJCzgGu3u8X9gZhfGd22jd41NJy4Q3C';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
      super()

     this.state = {
        reviews: [],
        searchTerm: ""
      }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.fetchResults(this.state.searchTerm)

    }

    fetchResults = (searchTerm) => {
      const SearchURL = `${URL}?query=${searchTerm}`
      fetch(SearchURL)
        .then(res => res.json())
        .then(review => this.setState({reviews: review.results}))
    }

    componentDidMount() {
      this.fetchResults()

    }

    render() {
      return (
        <div className="searchable-movie-reviews">
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})} />
          </form>
          {this.state.reviews != undefined && this.state.reviews.length > 0 && <h2>Movie Search Results:</h2>}
          <MovieReviews reviews={this.state.reviews} />
        </div>
      )
    }
}

export default SearchableMovieReviewsContainer
