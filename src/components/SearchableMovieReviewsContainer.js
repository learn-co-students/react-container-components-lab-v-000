import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// Code SearchableMovieReviewsContainer Here

const NYT_API_KEY = 'GIBPkPQOAVAyC3wkukP5sMTrBMs1ZKPu';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
const ADD_MY_KEY = `&api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
	state = {
		reviews: [],
		searchTerm: ""
	}

	handleChange = event => {
		this.setState({
			searchTerm: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		fetch(URL.concat(this.state.searchTerm, ADD_MY_KEY))
			.then(resp => resp.json())
			.then(data => this.setState({ reviews: data.results}) )
	}

	render() {
		return(
			<div className="searchable-movie-reviews">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="term">Enter a Term to Search: </label>
					<input type="text" id="search" value={this.state.searchTerm} onChange={this.handleChange} />
					<br/>
					<input type="submit" value="Search" />
				</form>
				<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}
}

export default SearchableMovieReviewsContainer