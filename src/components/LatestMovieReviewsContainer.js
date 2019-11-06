import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {

	state = {
     reviews: ""
  }
	
   render() {
   	return (
	<div className= "latest-movie-reviews">
	   {this.state.reviews.map((review) => <h1 review={review}></h1>)}
	</div>
	)
   }
                  
  componentDidMount() {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?')
      .then(res => res.json())
      .then(({data}) => this.setState({ reviews: data }))
  }


}

export default LatestMovieReviewsContainer;