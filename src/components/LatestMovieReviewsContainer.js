import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const nytApiKey = 'f7b60cef5c874da99523cccd2a22c133';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${nytApiKey}`;

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();
 
    this.state = {
      reviews: []
    };
  }
 
  componentWillMount() {
    fetch(URL)
      .then(res => res.json())
      .then(response => this.setState
      	({ reviews: response.results })
     	);
  }	
 
  render() {
    return (
    	<div className="latest-movie-reviews">
    		<h1> New York Times Latest Reviews: </h1>
    		<MovieReviews reviews = {this.state.reviews}/>
    	</div>	
  	)
  }
}

export default LatestMovieReviewsContainer;
