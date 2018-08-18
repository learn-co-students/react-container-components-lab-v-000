import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
export default class SearchableMovieReviewsContainer extends Component {
	constructor() {
		super()
		this.state = {
			searchTerm:"",
			reviews: []
		}
	}

	handleChange = event => {
		this.setState({
			searchTerm: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		this.onSubmit(this.state.value)

	}

	onSubmit = (word) => {
		const term = word 
		fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${term}&api-key=f98593a095b44546bf4073744b540da0`)
		.then(response => response.json()) 
		.then((data) => {
			this.setState({ 
				reviews: data.results
			})})
		}

	render() { 
		return (<div className="searchable-movie-reviews">
			<form onSubmit={this.handleSubmit}>
			<input type="text" value={this.state.value} onChange={this.handleChange}/>
			<inpit type="submit"/>
			</form>
			<MovieReviews reviews={this.state.reviews}/>
			</div>
			)
	}
}