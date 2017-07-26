import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';
require('es6-promise').polyfill();


const NYT_API_KEY = '2d22e5b6d7914792aae97c0806b14364';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
// Movie Reviews API: 2d22e5b6d7914792aae97c0806b14364

export default class LatestMovieReviewsContainer extends React.Component {
	constructor() {
		super();

		this.state = {
			reviews: []
		}
	}

	componentWillMount = () => {
     fetch(URL)
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }));
  }

	render() {
		return (
			<div className="latest-movie-reviews">
				<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}
}

