import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = { reviews: [],
            searchTerm: "" }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleClick = event => {
    event.preventDefault()
    const query = this.state.searchTerm
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${query}&api-key=${NYT_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        const reviews = data.results
        console.log(reviews)
        this.setState({ reviews: reviews })
      })
  }


  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleClick}>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} name="searchTerm"/>
          <button type="submit">Search!</button>
        </form>
        <MovieReviews reviews={this.state.reviews} header="Search Results"/>
      </div>
    )
  }
}
