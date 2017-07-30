import React from 'react';
import MovieReviews from './MovieReviews';
import fetch from 'isomorphic-fetch';

const NYT_API_KEY = '50357c428b1842228fbc343eb8210f9e';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
// This is a Container component ( i.e. logic)

export default class LatestMovieReviewsContainer extends React.Component {
	constructor(){
		super()

		this.state = {
			reviews: []
		}
	}

   componentDidMount(){
   	fetch(URL)
   	  .then(response => response.json()) 
   	  .then(movies => {
   	  	console.log("this.state in didMount", this.state) 
   	  	console.log("this in didMount", this) 
   	  	this.setState({reviews: [...movies.results]})
   	    console.log("this.state in didMount (after)", this.state) 
   	  	console.log("this in didMount (after)", this) 
   	  })
   }

	render(){
		console.log("State reviews in render:", this.state.reviews)
		return(
			  <div className="latest-movie-reviews" >
			    <MovieReviews reviews={this.state.reviews}>
			    			    <p>This is LatestMovieReviewsContainer</p>			
		        </MovieReviews>
		      </div>
		        )
		}
	
}


