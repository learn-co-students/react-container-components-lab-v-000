import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'DlDwKSmnYowC8lBTqv4GgfWZC1BFH3wi';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{

  constructor(){
    super()
    this.state = {
      reviews:[],
      searchTerm:""
    }
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    fetch(URL+this.state.searchTerm)
      .then(response => response.json())
      .then(respJSON => this.setState({reviews:respJSON.results}))
  }

  handleChange = (event) =>{
    event.preventDefault()
    this.setState({
      searchTerm:event.target.value
    })
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
