import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'TdRbH1G2QNCoYzJC3gokOCbpECeBFHOi';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state= {
      reviews: [],
      searchTerm : ""
    }
  }

  urlConstruct() {
    return `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`
  }

  changeHandle = (event) => {
    this.setState({
      [event.target.id] : event.target.value
    })
  }

  submitHandle = (event) => {
    event.preventDefault()
    fetch(this.urlConstruct())
    .then(response => response.json())
    .then(reviews => {
      this.setState({reviews: reviews.results})
    })
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form className="searcher" onSubmit={this.submitHandle}>
          <input type="text" id="search" onChange={this.changeHandle} value={this.state.searchTerm} />

          <input type="submit" value = "Search!" />
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
