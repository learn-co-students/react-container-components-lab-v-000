import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

// Code SearchableMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleChange = ({query}) => {
    this.setState({
      searchTerm: query
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}`
                + `api-key=${NYT_API_KEY}`;
    fetch(URL)
    .then(res => res.json())
    .then(data=> this.setState({reviews: data.results}))
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={this.handleChange} />
          <input type="submit" value="Search" />
        </form>
        <div>
          <MovieReviews reviews={this.state.reviews}/>
        </div>
      </div>
    )
  }
}
