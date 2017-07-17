import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'e70a36c1a0204fc2a0ab15589d33bdd3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here 
export default class LatestMovieReviewsContainer extends React.Component {
	constructor() {
		super();

		this.state = {
			reviews: []
		};
	}

	 componentWillMount() {
        this.getLatestMovieReviews();
    }
	    getLatestMovieReviews = () => {
        fetch(URL)
            .then( response => {
            return response.json()
        })
            .then( result => {
            this.setState({
                reviews: result.results
            })
        })
    }

	render() {
		return (
			<div className="latest-movie-reviews">
			<MovieReviews reviews={this.state.reviews} />
			</div>
			)
	}
}
