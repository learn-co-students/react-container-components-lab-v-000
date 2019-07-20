import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'a8HcCSWMgQUQL8VLeJDweAGnq85jvenC';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
 constructor() {
   super()

   this.state = {
     reviews: [],
     searchTerm: ""
   };
 }

 handleChange = event => {
   this.setState({
   searchTerm : event.target.value
 })
}

handleSubmit = event => {
event.preventDefault()
  fetch(`${URL}${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
    .then(response => response.json())
    .then(data => this.setState({ reviews: data.results }))
}

render() {
 return (
   <div className ="searchable-movie-reviews">
   <form onSubmit={this.handleSubmit}>
     <input type="text" id="search" value={this.state.searchTerm} onChange={this.handleChange}/>
   </form>
      <MovieReviews reviews={this.state.reviews} />
 </div>
 )
}


}

export default SearchableMovieReviewsContainer;