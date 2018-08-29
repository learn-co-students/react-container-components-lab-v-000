import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: "", reviews: []}
  }
  
  findMovies = (event) => {
    event.preventDefault();
    fetch(URL+`query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`).then(resp => resp.json()).then(resp => this.setState({reviews: resp.results}))
  }

  updateForm = (event) => this.setState({form: {[event.target.name]: event.target.value}})

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h2>NYT Reviews Search</h2>
        <form onSubmit={this.findMovies}>
          <input type="text" name="searchTerm" onChange={this.updateForm}/>
          <input type="submit" value="Search"/>
        </form>
        <br/>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    );
  }

}