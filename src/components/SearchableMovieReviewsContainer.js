import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'WQAVG3Gew2YeaYsEiGX5DHon87GcQGsw';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm:""
    }
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h4>Search For Movie Reviews</h4>
        <div>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input type="text" onChange={e => this.handleChange(e)} placeholder="Search" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

  search = () => {
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then(resp => resp.json())
      .then(data => this.setState({ reviews: data.results }))
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.searchTerm)
    this.search()
  }
}