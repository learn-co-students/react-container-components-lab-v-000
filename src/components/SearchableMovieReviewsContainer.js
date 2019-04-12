import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Euevgl8xQ6RdUBWxgsWvyn7FMzq52jed';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
const API_KEY = `&api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
	state = {
		reviews: [],
		searchTerm: ''
	}

	handleSearchChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const url = URL + this.state.searchTerm + API_KEY
		fetch(url)
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
			<div className="searchable-movie-reviews">
				<form
					onSubmit={this.handleSubmit}>
					<input 
						name='searchTerm'
						onChange={this.handleSearchChange} />
				</form>
				<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}
}