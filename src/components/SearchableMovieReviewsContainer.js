import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'd6028a8f9bb644f9af7ad595ad45d5d6';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {

  state = {
    searchTerm: "",
    reviews: []
  }

  handleSubmit = event => {
    event.preventDefault()
    this.searchMovies(this.state.searchTerm)
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Search For Movie Reviews</label>
          <input type="text" value={this.state.searchTerm} onChange={event=>this.setState({query:event.target.value})}/>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

  searchMovies = (searchTerm) => {
    fetch(URL.concat(searchTerm))
      .then(res=>res.json())
      .then(res => this.setState({reviews: res.results}));
  }

}

export default SearchableMovieReviewsContainer;
