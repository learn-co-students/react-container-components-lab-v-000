//containter component
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearcheableMovieReviewsContainer extends React.Component {
    constructor() {
    super();
    this.state = {reviews: [],
    	searchTerm: ""
        }
     }

   componentDidMount() {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}')
      .then(res => res.json())
      .then((response) => this.setState({ reviews: response }))
   }

   eventHandler = event => {
	event.preventDefault();
	this.setState({ searchTerm: event.target.value});
   }
	
   render() {
   	return (
	<div className= "searchable-movie-reviews">
	  <MovieReviews reviews= {this.state.reviews} />
	  <form onSubmit={this.eventHandler}>
       <label>
        <input type="text" name="input" value={this.state.searchTerm} onChange={this.handleInputChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
	</div>
	)
   }

}

export default SearcheableMovieReviewsContainer;