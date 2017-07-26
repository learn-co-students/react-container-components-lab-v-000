import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';
require('es6-promise').polyfill();

const NYT_API_KEY = '2d22e5b6d7914792aae97c0806b14364';
const SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends React.Component {
	constructor() {
		super();

		this.state = {
			searchTerm: '',
			reviews: []
		}
	}

  handleSearchInputChange = (event) => {
  	this.setState({
  		searchTerm: event.target.value
  	})
  }

  handleSubmit = (event) => {
  	event.preventDefault();
  	fetch(SEARCH_URL + this.state.searchTerm)
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }));
  }

	render() {
		return (
			<div className="searchable-movie-reviews">
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.value} onChange={this.handleSearchInputChange} />
					<input type="submit" value="Submit" />
				</form>
				<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}
}