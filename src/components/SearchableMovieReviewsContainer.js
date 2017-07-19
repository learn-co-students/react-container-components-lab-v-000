// Code SearchableMovieReviewsContainer Here

import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'b5af908cffaf412ab547c253089fc708';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			searchTerm: '',
			reviews: []
		};

		this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);	
	}

	handleSearchInputChange(e){
		this.setState({ searchTerm: e.target.value });
	}

	handleSubmit(e){
		e.preventDefault();
		fetch(BASE_URL.concat(this.state.searchTerm))
			.then(res => res.json())
			.then(res => this.setState({ reviews: res.results }));
	}

	render(){
		return(
			<div className="searchable-movie-reviews">
		        <MovieReviews reviews={this.state.reviews} />
      		</div>
		);
	}

}

export default SearchableMovieReviewsContainer;