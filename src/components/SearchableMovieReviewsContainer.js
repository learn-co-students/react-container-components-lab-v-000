import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			reviews: [],
			searchTerm: ""
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();

		fetch(URL+this.state.searchTerm)
			.then((response) => response.json())
			.then((response) => this.setState({ reviews: response.results}))
	}

	handleChange = (event) => this.setState({ searchTerm: event.target.value });

	render () {
		return (
			<div className="searchable-movie-reviews">
				<form onSubmit={this.handleSubmit}>
					<label>Search Keyword: </label>
					<input type="text" onChange={this.handleChange}></input>
					<button type="submit">Submit</button>
				</form>

				<h2>Searched Reviews:</h2>
				<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}
}