import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super();
    this.state={
      reviews : [],
      searchTerm : ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
  }



  handleChange = e =>{
    this.setState({
      searchTerm: e.target.value
    })
  }


  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Search Movies
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
          </label>
          <button type="submit">Submit</button>
        </form>

        { this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
