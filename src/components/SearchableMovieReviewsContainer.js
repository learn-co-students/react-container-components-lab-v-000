import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '5d3791b7d4a34b5b865a71f531787dba';
const URL = (term) => 'https://api.nytimes.com/svc/movies/v2/reviews/search.json' + `?query=${term}` + `?api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault()
    fetch(URL(this.state.searchTerm))
      .then(res => res.json())
      .then(resp => {
        let rev = resp.results
        this.setState({ reviews: rev })
      })
  }

  handleTyping = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }


  render() {
    return(
      <div className='searchable-movie-reviews'>
      <form onSubmit={ (event) => this.handleSubmit(event) }>
        <input type="text" value={ this.state.searchTerm } onChange={ (event) => this.handleTyping(event) }></input>
        <input type="submit" value="Submit"></input>
      </form>
      <MovieReviews reviews={ this.state.reviews }/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
