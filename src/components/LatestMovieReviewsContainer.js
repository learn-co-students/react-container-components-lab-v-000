import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Euevgl8xQ6RdUBWxgsWvyn7FMzq52jed';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContaine extends Component {
	state = {
		reviews: []
	}

	componentDidMount() {
		console.log('component mounted')
		console.log(URL)
		fetch(URL)
			.then( resp => resp.json())
			.then( json => {
				this.setState({
					reviews: json.results.map( review => {
						return {title: review.display_title, author: review.byline}
					})
				});
			});
	}

	render() {
		return (
			<div className='latest-movie-reviews'>
				<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}
}
