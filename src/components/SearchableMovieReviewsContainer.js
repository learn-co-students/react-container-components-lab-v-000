import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
	constructor() {
		super();
		this.state = {
			reviews: [],
			searchTerm: ""
		}
	}

	getLatest = (event) => {
		this.setState({ searchTerm: event.target.value })
		this.updateLatest();
	}

	updateLatest() {
		const latestUrl = URL + `&query=${this.state.searchTerm}`
		fetch(latestUrl)
		.then(res => res.json())
		.then(res => this.setState({reviews: res.results}))
	}

	render() {
		return(
			<div className="searchable-movie-reviews">
				<input 
				value={this.state.searchTerm}
				onChange={this.getLatest} />
				<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}
}

export default SearchableMovieReviewsContainer;