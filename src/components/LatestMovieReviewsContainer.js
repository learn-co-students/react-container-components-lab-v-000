import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const MY_API_KEY = 'cc09868df44044c0861103cfdeffc16c';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${MY_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
	
	constructor(){
		super()
		this.state = {
			reviews: []
		}
	}

	updateState = (data) => {
		this.setState({
			reviews: data
		})
	}

	componentDidMount(){
		fetch(URL)
			.then(response => {
				if (response.status >= 400) {
					throw new Error("Bad response from server");
				}
				return response.json();
			})
			.then(stories => {
				// console.log(stories)
				this.updateState(stories);
			});
	}

	render() {
		return (
			<div className="latest-movie-reviews">
				<MovieReviews reviews={this.state.reviews}/>
			</div>
		)
	}
}

export default LatestMovieReviewsContainer