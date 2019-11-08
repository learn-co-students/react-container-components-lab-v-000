//container component
import React, { Component } from 'react';
import 'isomorphic-fetch';

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
    fetch(URL)
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }));
  }

   render() {

   	var reviews = Array.from(this.state.reviews);

   	return (
	<div className= "latest-movie-reviews">
	   <h1>Latest Movie Reviews</h1>
	   {reviews.map((review) => (<li key={review.link.url}>{review.display_title}</li>))}
    </div>
	)
   }
              

}

export default LatestMovieReviewsContainer;