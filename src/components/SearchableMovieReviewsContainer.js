import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';

// Code SearchableMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const searchTerm = this.state.searchTerm
    this.componentDidMount(searchTerm)
  }

  componentDidMount(searchTerm) {
    fetch(`${URL}${searchTerm}&api-key=${NYT_API_KEY}`)
      .then(response => response.json())
      .then(reviews => this.setState(reviews: response.results ))
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={event => this.handleChange(event)}/>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
