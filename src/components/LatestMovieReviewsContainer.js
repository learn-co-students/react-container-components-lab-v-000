import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'E9yDGAwgfVOHWRGHqnrJT85QQGJBf7rZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
	state = {
		reviews: []
	}

	componentDidMount = () => {
		fetch(URL)
		.then(response => response.json())
		.then(data => this.setState({ movies: data.results}))
		// .then(data => console.log(data.results))
	}

	isPick = (movie) => {
		if (movie.critics_pick === 0) {
			return 'no'
		} else {
			return 'yes'
		}
	}
	
	render() {
		return (
			<div className="latest-movie-reviews">
				<h2>Latest Movie Reviews</h2>
				<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}
}