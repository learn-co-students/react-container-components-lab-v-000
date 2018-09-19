import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const MY_API_KEY = 'cc09868df44044c0861103cfdeffc16c';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${MY_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
	constructor(){
		super()
		this.state = {
			searchTerm: "",
			reviews: []
		}
	}

	handleChange = (event) => {
		this.setState({
			searchTerm: event.target.value
		})
	}

	updateState = (stories) => {
		this.setState({
			reviews: stories
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		fetch(URL +"?query=" + this.state.searchTerm)
			.then(response => {
				if (response.status >= 400) {
					throw new Error("Bad response from server");
				}
				return response.json();
			})
			.then(stories => {
				this.updateState(stories);
			});
	}

	render() {
		return (
			<div className="searchable-movie-reviews">
				<form onSubmit={event => this.handleSubmit(event)}>
					<input type="text" onChange={event => this.handleChange(event)} />
					<input type="submit" />
				</form>
				< MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}
}

export default SearchableMovieReviewsContainer