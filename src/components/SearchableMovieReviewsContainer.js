import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '0KXb3RKTAkeh3YhqRPh9pnDaKgXX6ydF';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
export default class SearchableMovieReviewsContainer extends Component {
	constructor() {
		super()
		this.state = {
			reviews: [],
			searchTerm: ''
		}
	}

	fetchReviews = () => {
		let query = 'all.json?'
		if (this.state.searchTerm !== '') {
			query = `query=${this.state.searchTerm}api-key=${NYT_API_KEY}`
		}
		fetch(`${URL}/${query}`)
			.then(res => res.json())
			.then(reviews => this.setState({ review: reviews.results }))
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.fetchReviews()
	}

	handleChange = (e) => {
		this.setState({ searchTerm: e.target.value })
	}

	render() {
		return (
			<div className='searchable-movie-reviews'>
				<form onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.handleChange} value={this.state.searchTerm} />
					<input type="submit" />
				</form>
				<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}
}
