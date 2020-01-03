import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
	state = {
		reviews: []
	}

	fetchData = () => {
		fetch(`${URL}`)
		.then(res => res.json())
		.then(movies => {
			this.setState({
				reviews: movies.results
			})
		})
	}

	componentDidMount() {
		this.fetchData()
	}

	render() {
		return (
			<div className="latest-movie-reviews">
				<h1> Latest Movie Reviews:</h1>
				<MovieReviews reviews={this.state.reviews}/>
			</div>
		)
	}
}