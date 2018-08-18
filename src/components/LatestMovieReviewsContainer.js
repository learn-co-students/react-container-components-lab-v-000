import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
export default class LatestMovieReviewsContainer extends Component {
	constructor(){
		super()
		this.state = {
			reviews: []
		}
	}

	componentDidMount() {
		fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=f98593a095b44546bf4073744b540da0")
		.then(response => response.json())
		.then((data) => {
			this.setState({
				reviews: data.results
			})
		})
	}

	render() {
		return (
			<div className="latest-movie-reviews"><MovieReviews reviews={this.state.reviews}/></div>
			)
	}
}