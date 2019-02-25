import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'a7uzFPLt3vuxXJtrhBNqBo2tfh90btga';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    const searchURL = URL + `&query=${this.state.searchTerm}`
    event.preventDefault()
    fetch(searchURL)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        this.setState({ reviews: data.results })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="searchTerm" onChange={this.handleChange} />
          <input type="submit" value="Search NYT Reviews" />
        </form>
      
        <MovieReviews reviews={this.state.reviews} />
      </div>

    )
  }
}