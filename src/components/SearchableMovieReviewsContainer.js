import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';
import SearchInput from './SearchInput';

const NYT_API_KEY = '335c87a814744275bf28f54650a736ef';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends React.Component{
	constructor() {
		super();

		this.state = {
			searchTerm: '',
			reviews: []
		};
	}

	handleSearchInputChange = (e) => {
		this.setState({ searchTerm: e.target.value });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		fetch(BASE_URL.concat(this.state.searchTerm))
			.then(res => res.json())
			.then(res => this.setState({ reviews: res.results }));
	}

	render(){
		return(
			<div className="searchable-movie-reviews">
        <SearchInput
          handleSubmit={this.handleSubmit}
          handleChange={this.handleSearchInputChange}/>
		    <MovieReviews reviews={this.state.reviews} />
      </div>
		);
	}
}