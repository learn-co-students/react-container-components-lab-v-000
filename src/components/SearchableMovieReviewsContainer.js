import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';


// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  fetchMovies = () => {
    let URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
              + `api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`;

    
    fetch(URL)
    .then(res => res.json())
    .then(movies =>{
      console.log(movies)
      // this.setState({
      //   reviews: movies.results
      // })
    })
    .catch(err => {
    })
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.fetchMovies}>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
          <input type="submit" value="Search" />
        </form>
        <MovieReviews movies={this.state.reviews} />
      </div>
    )
  }

}
