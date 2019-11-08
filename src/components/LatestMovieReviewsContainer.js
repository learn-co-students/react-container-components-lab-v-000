//container component
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor() {
  	super();
	this.state = {
     reviews: []
    };
  }
	
   componentDidMount() {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?')
      .then(res => res.json())
      .then(response => this.setState({ reviews: response }));
  }


   render() {
   	return (
	<div className= "latest-movie-reviews">
	   <MovieReviews reviews= {this.state.reviews} />
    </div>
	)
   }
              

}

export default LatestMovieReviewsContainer;