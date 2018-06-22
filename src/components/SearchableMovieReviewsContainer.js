import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {
	constructor(){
		super();

		this.state = {
			searchTerm: '',
			reviews: []
		};
	}

	handleSearchInput = event => this.setState({searchTerm: event.target.value})

	handleSubmit = event => {
		event.preventDefault()

		fetch(URL.concat(this.state.searchTerm))
      	.then(response => response.json())
      	.then(reviews => this.setState({ reviews: reviews.results }));
	}

	render() {
		return (
			<div className="searchable-movie-reviews">
    			<form onSubmit={this.handleSubmit}>
          			<label htmlFor='search-input'>Search Movie Reviews</label>

          			<input id='search-input' type="text" onChange={this.handleSearchInput} />

          			<button type="submit">Submit</button>
       			</form>
				
				<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}
}

export default SearchableMovieReviewsContainer