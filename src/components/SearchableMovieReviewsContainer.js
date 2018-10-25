
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=f98593a095b44546bf4073744b540da0&query=`

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state= {
      reviews: [],
      searchTerm: ""
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(URL+`${this.state.searchTerm}`)
    .then(response => response.json())
    .then(data => this.setState({reviews: data.results}))
  }


  render(){
    console.log("searchable",this.state)
    return(
      <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit} >
        <input type="text" id="searchTerm" onChange={this.handleChange} />
        <button type="submit">Find Review</button>
      </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
