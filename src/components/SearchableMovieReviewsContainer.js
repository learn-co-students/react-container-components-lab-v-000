import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'QvNb8ijnk24AOUG8TFzadg1YHBO4iaLD';

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{
  state ={
    reviews: [],
    searchTerm: ''
  }

  onChangeType = (event) =>{
  this.setState({
    searchTerm: event.target.value
  })
}

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.findMovieReviews}>
          <input type="text" value={this.searchTerm} onChange={this.onChangeType}></input>
          <button type="submit">Searh Movies</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>)
  }

  findMovieReviews = (event) =>{
    event.preventDefault();
    let searchURL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}`
                + `&api-key=${NYT_API_KEY}`
    fetch(searchURL)
    .then(response => response.json())
    .then(response => this.setState({reviews: response.results}));
  }
}

export default SearchableMovieReviewsContainer
