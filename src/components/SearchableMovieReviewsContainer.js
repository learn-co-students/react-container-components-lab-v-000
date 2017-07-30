import React from 'react';
import MovieReviews from './MovieReviews';


// Code SearchableMovieReviewsContainer Here
// This is a Container component ( i.e. logic)

export default class SearchableMovieReviewsContainer extends React.Component {
	constructor(){
		super()
		this.state = {
			searchTerm: "hello",
			reviews: []
		}
	}
	render(){
 	  return(
 	  	<div className="searchable-movie-reviews">
	      <p>This is SearchableMovieReviewsContainer</p>
	      <MovieReviews reviews={this.state.reviews}/>
	    </div>
	  )
	}
}

