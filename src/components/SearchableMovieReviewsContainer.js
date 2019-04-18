import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'api-key=KN6yCBogcs1KvDlEt4YuLb2RoDw6BwCF';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ''
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = () => {
    fetch(URL + `${this.state.searchTerm}` + NYT_API_KEY)
      .then(response => response.json())
      .then(data =>
      this.setState({
        reviews: (data["results"])
      }),
      console.log(this.state.reviews)
    )
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Enter a Search Term:</label>
          <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}></input>
          <input type="submit" value="Find Reviews!"></input>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
