import React from 'react';
import MovieReviews from './MovieReviews';


// Code SearchableMovieReviewsContainer Here
// This is a Container component ( i.e. logic)

export default class SearchableMovieReviewsContainer extends React.Component {
	render(){
 	  return(
 	  	<div>
	      <p>This is SearchableMovieReviewsContainer</p>
	      <MovieReviews />
	    </div>
	  )
	}
}