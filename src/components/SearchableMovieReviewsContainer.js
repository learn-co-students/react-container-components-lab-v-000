// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import Search from './Search'

const NYT_API_KEY = 'e70a36c1a0204fc2a0ab15589d33bdd3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

// Code LatestMovieReviewsContainer Here 
class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      reviews: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(ev) {
    this.setState({
      searchTerm: ev.target.value
    })
  }

  handleSubmit(ev) {
    ev.preventDefault()
    fetch(url.concat(this.state.serchTerm))
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }))
  }


  render() {
    return (
      <div className='searchable-movie-reviews'>
        <Search
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}/>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer