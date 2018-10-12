import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '43e2fcfb0b704ea3b536d2b9ac916da5';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`
// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
  state = {
    searchTerm: "",
    reviews: []
  }

  fetchReviews = () => {
    fetch(`${URL}${this.state.searchTerm}`)
    .then(resp => resp.json())
    .then(reviews => this.setState({reviews: reviews.results}))
  }

  handleChange = (event) => {
    event.persist()
    this.setState({searchTerm
      : event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchReviews()
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h4>Enter Search Here</h4>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text"></input>
          <input type="submit"></input>
        </form>
        <MovieReviews reviews={this.state.reviews} text="Reviews From Search" />
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer
