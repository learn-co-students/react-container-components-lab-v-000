import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
	state = {
		reviews: [],
		searchTerm: '',
	}
 	handleChange = (event) => {
		this.setState({
			searchTerm: event.target.value,
		});
	}
 	handleSubmit = (event) => {
		event.preventDefault()
		this.handleSearch()
	}
 	handleSearch = () => {
		fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`)
			.then(response => {
				if (response.status >= 400) {
					throw new Error("Bad response from server");
				}
				return response.json();
			})
			.then(data => {
				this.setState({
					reviews: data.results,
				}, () => console.log(this.state.reviews));
			})
	}
 	render() {
		return (
			<div className="searchable-movie-reviews">
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
					<input type="submit" value="Search" />
				</form>
				<h1>Search Results</h1>
				<MovieReviews reviews={this.state.reviews} />
			</div>
			)
	}
 }