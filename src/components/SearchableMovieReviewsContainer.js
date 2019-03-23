import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Ao6dFQEYcjA22yOdhzk9LMvAPsRVfnBL';


export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()
 
    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  fetchMovies(search) {
  	let URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `query=${search}` + `&api-key=${NYT_API_KEY}`;
  	debugger
    fetch(URL)
      .then(response => response.json())
      .then(reviews => this.setState({ reviews: reviews.results }))
  }


  handleInputChange = (event) => {
    let searchWord = event.target.value
    this.setState({
      searchTerm: searchWord
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.fetchMovies(this.state.searchTerm)
  }

 
  render() {
    return (
    	<div className="searchable-movie-reviews">
    	    <form onSubmit={event => this.handleSubmit(event)}>
        		<input type="text" onChange={this.handleInputChange} value={this.state.searchTerm} />
        		<button onClick={event => this.handleSubmit(event)}>Find Reviews</button>
      		</form>
    		
    		<MovieReviews reviews={this.state.reviews} />
    	</div>
    	)
  }
}