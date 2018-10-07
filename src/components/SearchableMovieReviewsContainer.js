import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }

  handleClick(term, event) {
    event.preventDefault()
    fetch(URL + `?query=` + term)
      .then(res => res.json())
      .then(resp => {
        let rev = resp.results
        this.setState({ reviews: rev })
      })
  }

  handleTyping = (e) => {
    debugger
    this.setState({
      searchTerm: e.target.value
    })
  }


  render() {
    return(
      <div className='searchable-movie-reviews'>
      <form onSubmit={ (event) => this.handleClick(this.state.searchTerm, event) }>
        <input type="text" value={ this.state.searchTerm } onChange={ (event) => this.handleTyping(event) }></input>
        <input type="submit" value="Submit"></input>
      </form>
      <MovieReviews reviews={ this.state.reviews }/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
