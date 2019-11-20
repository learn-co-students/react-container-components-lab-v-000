import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?`
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      query: "",
      reviews: []
    }
  }

handleSubmit = (event) => {
  event.preventDefault()
  fetch(`${URL}` + `&query=${this.state.query}`)
  .then(resp => resp.json())
  .then(searchData => this.setState( {searchResults: searchData.results} ))
}


  handleOnChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }
  render() {
    return(
    <div className="searchable-movie-reviews">
      <form  onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query}
            onChange={this.handleOnChange} />

          <input type="submit"
            value="Search Movie Reviews" />
        </form>
      <MovieReviews searchResults={this.state.reviews} />
    </div>
    )
  }
}
