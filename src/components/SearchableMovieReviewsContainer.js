import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + 'query=' + + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      word: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      word: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.search(this.state.word)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
