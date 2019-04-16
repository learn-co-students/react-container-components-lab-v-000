import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'iGlBkZ27dbNyupBb3Na0PN1RNpACOanc';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=`
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super()
    this.state = {
      searchTerm: '',
      reviews: [],
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json`
                + `?api-key=${NYT_API_KEY}&query=${this.state.term}`)
      .then(response => response.json())
        .then(json => this.setState({reviews: json.results}))
  }

  handleTermChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <h2>Search Movie Reviews</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Search Reviews: </label>
          <input type="text" onChange={this.handleTermChange} value={this.state.searchTerm}/>
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
