import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'b5af908cffaf412ab547c253089fc708';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component{
	constructor(props){
		super(props)

		this.state = {
			reviews: []
		}
	}

	componentDidMount(){
		this.fetchLatestMovieReviews();
	}

	fetchLatestMovieReviews = () => {	
		fetch(URL)
			.then(result => result.json())
			.then(reviews => this.setState({reviews}))
	}

	render(){
		return (
			<div className = 'latest-movie-reviews'>
				<MovieReviews reviews={this.state.reviews}/>
			</div>
		)
	}
}	
