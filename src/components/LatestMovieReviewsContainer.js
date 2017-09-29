// eslint-disable-next-line
import React, { Component } from 'react';
import MovieReviews from './MovieReviews';
import 'isomorphic-fetch';
require('es6-promise').polyfill();


const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
  super();

  this.state = {
    reviews: []
  };
}

componentDidMount() {
	var reviewsJSON;
  fetch(URL)
    .then(function(response) {
	return response.json()})
    .then(function(reviews) {
		 reviewsJSON = reviews["results"] })
		this.setState({
			reviews: reviewsJSON})
}

  render() {
    return (
      <div className='latest-movie-reviews'>
      	<MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
};

export default LatestMovieReviewsContainer;
