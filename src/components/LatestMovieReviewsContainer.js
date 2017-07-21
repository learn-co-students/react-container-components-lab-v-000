import React from 'react';
import MovieReviews from './MovieReviews';
import 'isomorphic-fetch';

const NYT_API_KEY = '50357c428b1842228fbc343eb8210f9e';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
// This is a Container component ( i.e. logic)

export default class LatestMovieReviewsContainer extends React.Component {

	fetchMovieReviews = () => {
		fetch(URL)
		  .then((response) => {
		  	return response.json()
		  })
	}

	render(){
		{this.fetchMovieReviews().then(movies => {console.log(movies)})}
		return(

			<MovieReviews/>
			)
		}
	
}

