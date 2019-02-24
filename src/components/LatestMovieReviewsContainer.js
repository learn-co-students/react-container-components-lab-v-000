import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
require('es6-promise').polyfill();
require('isomorphic-fetch');


const NYT_API_KEY = '0KXb3RKTAkeh3YhqRPh9pnDaKgXX6ydF';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
	+ `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
	constructor() {
		super()
		this.state = {
			reviews: []
		}
	}

	componentDidMount = () => {
		fetch(URL)
	}

	render() {
		return (
			<div className="latest-movie-reviews">
				<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}
}
