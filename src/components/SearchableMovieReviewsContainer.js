// Code SearchableMovieReviewsContainer Here

// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import MovieReviews from './MovieReviews';
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: {}
    }
  }
  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }
  handleSubmit = (event)=> {
    event.preventDefault();
    fetch(BASE_URL.concat(this.state.searchTerm))
    .then(res => res.json())
    .then(reviews => this.setState({reviews: reviews}))
  }
  render(){
    return(
      <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.handleChange} />
      <button type="submit">Submit</button>
      </form>
       <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}
